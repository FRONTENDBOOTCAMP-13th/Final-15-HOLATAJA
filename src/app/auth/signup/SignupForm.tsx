'use client';

import Button from '@/components/Button';
import CheckboxButton from '@/components/CheckboxButton';
import Input from '@/components/Input';
import { useState, useActionState, useEffect } from 'react';
import { signupAction } from '@/data/actions/auth';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import Modal from '@/components/Modal';
import AddressCode from '@/components/AddressCode';

type FormField = 'email' | 'name' | 'password' | 'passwordCheck' | 'phone' | 'address' | 'zipCode';

//Zod 스키마 정의
const signupSchema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요').email('올바른 이메일 형식이 아닙니다'),
  name: z.string().min(1, '이름을 입력해주세요').min(2, '이름은 2자 이상이어야 합니다').max(20, '이름은 20자 이하여야 합니다'),
  password: z
    .string()
    .min(1, '비밀번호를 입력해주세요')
    .min(8, '비밀번호는 8자 이상이어야 합니다')
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, '비밀번호는 대문자, 소문자, 숫자를 포함해야 합니다'),
  passwordCheck: z.string().min(1, '비밀번호를 확인해주세요'),
  phone: z
    .string()
    .min(1, '휴대폰 번호를 입력해주세요')
    .regex(/^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/, '올바른 휴대폰 번호 형식이 아닙니다 (예: 010-1234-5678)'),
  zipCode: z.string().min(1, '우편번호를 입력해주세요'),
  address: z.string().min(1, '주소를 입력해주세요').min(5, '주소는 5자 이상이어야 합니다'),
});

export default function SignupForm() {
  const initInputState = { email: '', name: '', password: '', passwordCheck: '', phone: '', zipCode: '', address: '' };
  const initTouchedState = Object.fromEntries(Object.keys(initInputState).map(key => [key, false]));
  const [formData, setFormData] = useState(initInputState);
  const [error, setError] = useState(initInputState);
  const [touched, setTouched] = useState(initTouchedState);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const [signinModal, setSigninModal] = useState(false); // 회원 가입 시 modal 창 실행 여부, 이미 등록된 계정 중복 체크
  const [checkAgree, setCheckAgree] = useState(false); // 이용 약관 체크 상태

  // Server Action 연결
  const [actionState, formAction, isPending] = useActionState(signupAction, null);

  //유효성 검사 함수들
  const validateField = (field: string, value: string) => {
    //비밀번호일치는 따로 처리해야함
    if (field === 'passwordCheck') {
      if (!value) return '비밀번호를 확인해주세요';
      if (value !== formData.password) return '비밀번호가 일치하지 않습니다';
      return '';
    }
    try {
      const fieldSchema = signupSchema.shape[field as keyof typeof signupSchema.shape];
      fieldSchema.parse(value);
      return '';
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.issues[0].message;
      }
      return '입력값을 확인해주세요';
    }
  };

  const updateFieldError = (field: FormField, value?: string) => {
    const fieldValue = value ?? formData[field];
    const errorMessage = validateField(field, fieldValue);
    setError(prev => ({ ...prev, [field]: errorMessage }));

    // 비밀번호 관련 특별 처리
    if (field === 'password' && formData.passwordCheck && touched.passwordCheck) {
      const passwordCheckError = validateField('passwordCheck', formData.passwordCheck);
      setError(prev => ({ ...prev, passwordCheck: passwordCheckError }));
    }
  };

  // 입력값 받기
  const handleInputChange = (field: FormField) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    if (touched[field]) {
      updateFieldError(field, value);
    }
  };

  const handleInputBlur = (field: FormField) => () => {
    // 필드를 터치된 것으로 표시
    setTouched(prev => ({
      ...prev,
      [field]: true,
    }));
    updateFieldError(field);
  };

  // 클라이언트 검증 (Server Action 전에)
  const handleFormSubmit = (formData: FormData) => {
    // 전체 유효성 검사
    const data = {
      email: formData.get('email'),
      name: formData.get('name'),
      password: formData.get('password'),
      passwordCheck: formData.get('passwordCheck'),
      phone: formData.get('phone'),
      zipCode: formData.get('zipCode'),
      address: formData.get('address'),
    };
    //zod로 전체 검증
    const result = signupSchema.safeParse(data);

    let newError = {
      email: '',
      name: '',
      password: '',
      passwordCheck: '',
      phone: '',
      zipCode: '',
      address: '',
    };

    // Zod 에러를 기존 에러 형태로 변환
    if (!result.success) {
      const zodErrors = result.error.flatten().fieldErrors;
      newError = {
        email: zodErrors.email?.[0] || '',
        name: zodErrors.name?.[0] || '',
        password: zodErrors.password?.[0] || '',
        passwordCheck: zodErrors.passwordCheck?.[0] || '',
        phone: zodErrors.phone?.[0] || '',
        zipCode: zodErrors.zipCode?.[0] || '',
        address: zodErrors.address?.[0] || '',
      };
    }

    // 비밀번호 확인 별도 검증 (Zod 스키마에서 처리하기 어려우므로)
    if (data.passwordCheck !== data.password) {
      newError.passwordCheck = '비밀번호가 일치하지 않습니다';
    }

    setError(newError);

    // 에러가 있으면 제출하지 않음
    const hasErrors = Object.values(newError).some(error => error !== '');
    if (hasErrors || !isChecked) {
      if (!isChecked) setCheckAgree(true);
      return;
    }

    // 검증 통과시 Server Action 실행
    return formAction(formData);
  };

  useEffect(() => {
    if (actionState) {
      setSigninModal(true);
    }
  }, [actionState]);

  return (
    <>
      <form action={handleFormSubmit} className="w-full flex flex-col gap-6" noValidate>
        <div>
          <Input
            id="email"
            name="email"
            label="이메일"
            type="email"
            gap="gap-4"
            placeholder="이메일"
            value={formData.email}
            onChange={handleInputChange('email')}
            onBlur={handleInputBlur('email')}
            disabled={isPending}
          />
          {!!error.email && <p className="label-s w-full text-negative mx-[23%] mt-2">{error.email}</p>}
        </div>
        <div>
          <Input
            id="name"
            name="name"
            label="이름"
            type="text"
            gap="gap-4"
            placeholder="이름"
            value={formData.name}
            onChange={handleInputChange('name')}
            onBlur={handleInputBlur('name')}
            disabled={isPending}
          />
          {!!error.name && <p className="label-s w-full text-negative mx-[23%] mt-2">{error.name}</p>}
        </div>
        <div>
          <Input
            id="pw"
            name="password"
            label="비밀번호"
            type="password"
            gap="gap-4"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleInputChange('password')}
            onBlur={handleInputBlur('password')}
            disabled={isPending}
          />
          {!!error.password && <p className="label-s w-full text-negative mx-[23%] mt-2">{error.password}</p>}
        </div>
        <div>
          <Input
            id="pwCheck"
            name="passwordCheck"
            label="비밀번호 확인"
            type="password"
            gap="gap-4"
            placeholder="비밀번호 확인"
            value={formData.passwordCheck}
            onChange={handleInputChange('passwordCheck')}
            onBlur={handleInputBlur('passwordCheck')}
            disabled={isPending}
          />
          {!!error.passwordCheck && <p className="label-s w-full text-negative mx-[23%] mt-2">{error.passwordCheck}</p>}
        </div>
        <div>
          <Input
            id="phoneNum"
            name="phone"
            label="휴대폰 번호"
            type="tel"
            gap="gap-4"
            placeholder="휴대폰 번호"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            onBlur={handleInputBlur('phone')}
            disabled={isPending}
          />

          {!!error.phone && <p className="label-s w-full text-negative mx-[23%] mt-2">{error.phone}</p>}
        </div>
        {/* 주소 영역 */}
        <div className="flex flex-col gap-4">
          {/* 우편번호 */}
          <div className="flex gap-2 items-end">
            <Input
              id="zipCode"
              name="zipCode"
              label="우편번호"
              type="text"
              gap="gap-4"
              placeholder="우편번호"
              value={formData.zipCode}
              onChange={handleInputChange('zipCode')}
              onBlur={handleInputBlur('zipCode')}
              disabled={isPending}
            />
            {/* 주소검색 버튼 */}
            <AddressCode
              onSelectAddress={(zip, road) => {
                setFormData(prev => ({
                  ...prev,
                  zipCode: zip ?? '',
                  address: road ?? '',
                }));
                updateFieldError('zipCode', zip);
                updateFieldError('address', road);
              }}
            />
          </div>
          {!!error.zipCode && <p className="label-s w-full text-negative mx-[23%] mt-2">{error.zipCode}</p>}
          {/* 상세주소 */}
          <Input
            id="address"
            name="address"
            label="주소"
            type="text"
            gap="gap-4"
            placeholder="주소"
            value={formData.address}
            onChange={handleInputChange('address')}
            onBlur={handleInputBlur('address')}
            disabled={isPending}
          />
          {!!error.address && <p className="label-s w-full text-negative mx-[23%] mt-2">{error.address}</p>}
        </div>
        <div className="mx-auto">
          <CheckboxButton
            name="agreeTerms"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
            label="개인정보 수집 및 이용약관에 동의합니다."
            disabled={isPending}
          />
        </div>
        <Button submit disabled={isPending}>
          가입하기
        </Button>
      </form>
      <Modal
        isOpen={signinModal}
        handleClose={() => {
          setSigninModal(false);
        }}
        handleConfirm={() => {
          if (actionState?.ok === 1) {
            router.replace('/auth/login');
          } else {
            setSigninModal(false);
          }
        }}
        title={actionState?.ok === 1 ? '회원가입 성공' : '회원가입 실패'}
        description={actionState?.ok === 1 ? '로그인 페이지로 이동합니다.' : actionState?.message || '일시적인 오류가 발생했습니다.'}
        hideCancelButton
      ></Modal>
      <Modal
        isOpen={checkAgree}
        handleClose={() => {
          setCheckAgree(false);
        }}
        handleConfirm={() => setCheckAgree(false)}
        description="이용 약관을 확인해주시기 바랍니다."
      ></Modal>
    </>
  );
}
