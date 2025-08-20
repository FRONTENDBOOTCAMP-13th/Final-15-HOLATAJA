import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';
import Button from '@/components/Button';

interface AddressCodeProps {
  onSelectAddress: (zipCode: string, roadAddress: string) => void;
}

export default function AddressCode({ onSelectAddress }: AddressCodeProps) {
  const [openPostcode, setOpenPostcode] = useState(false);

  const handle = {
    clickButton: () => {
      setOpenPostcode(current => !current);
    },
    selectAddress: (data: any) => {
      onSelectAddress(data.zonecode, data.roadAddress);
      setOpenPostcode(false);
    },
  };
  return (
    <div>
      <Button type="button" onClick={handle.clickButton}>
        우편번호 검색
      </Button>

      {openPostcode && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg p-8 w-96 shadow-lg relative">
            <button className="absolute top-3 right-3 text-gray-500" onClick={() => setOpenPostcode(false)}>
              ✕
            </button>
            <DaumPostcode
              onComplete={data => {
                handle.selectAddress(data);
              }}
              autoClose={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
