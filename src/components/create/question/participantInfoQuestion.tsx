'use client';

import { QuestionProps } from '@/types';
import { useState } from 'react';
import Options from '../options';

const ParticipantInfoQuestion: React.FC<QuestionProps> = ({ question, mode }) => {
  const [selectedOption, setselectedOption] = useState('이름');
  const [placeholder, setPlaceholder] = useState('이름을 입력해주세요');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.value) {
      case 'contact':
        setselectedOption('연락처');
        setPlaceholder('연락처를 입력해주세요. (- 없이 번호만 입력)');
        break;
      case 'address':
        setselectedOption('주소');
        setPlaceholder('기본 주소를 입력해주세요.');
        break;
      case 'email':
        setselectedOption('이메일');
        setPlaceholder('이메일 주소를 입력해주세요.');
        break;
      default:
        setselectedOption('이름');
        setPlaceholder('이름을 입력해주세요.');
    }
  };

  return (
    <>
      {mode === 'editing' ? (
        <>
          <form className="flex gap-3">
            <div>
              <input
                type="radio"
                id="name"
                value="name"
                name="option"
                onChange={handleOptionChange}
                checked={selectedOption === '이름'}
              />
              <label htmlFor="name" className="ml-1">
                이름
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="contact"
                value="contact"
                name="option"
                onChange={handleOptionChange}
                checked={selectedOption === '연락처'}
              />
              <label htmlFor="contact" className="ml-1">
                연락처
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="address"
                value="address"
                name="option"
                onChange={handleOptionChange}
                checked={selectedOption === '주소'}
              />
              <label htmlFor="address" className="ml-1">
                주소
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="email"
                value="email"
                name="option"
                onChange={handleOptionChange}
                checked={selectedOption === '이메일'}
              />
              <label htmlFor="email" className="ml-1">
                이메일 주소
              </label>
            </div>
          </form>
          <p className="caption text-gray-3">{`참여자가 직접 ${selectedOption} 입력`}</p>
          <Options id={question.id}/>
        </>
      ) : (
        <>
          <label className="p-3 rounded-lg flex gap-2 bg-gray-1 mt-3 text-gray-3">
            <input type="text" className="w-full" disabled value={placeholder} />
          </label>
          {selectedOption === '주소' && (
            <label className="p-3 rounded-lg flex gap-2 bg-gray-1 mt-3 text-gray-3">
              <input type="text" className="w-full" disabled value={'상세 주소를 입력해주세요.'} />
            </label>
          )}
        </>
      )}
    </>
  );
};

export default ParticipantInfoQuestion;