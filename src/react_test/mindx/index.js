import React, { useState } from 'react';

const Rt = () => {
  const [formData, setFormData] = useState({
    name: '',
    numberphone: '',
    namefind: ''
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [findData, setFindData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.numberphone.length === 10) {
      alert("Thêm thành công");
      const newData = {
        name: formData.name,
        numberphone: formData.numberphone
      };
      setSubmittedData([newData, ...submittedData]);
      setFormData({
        name: '',
        numberphone: '',
        namefind: '' 
      });
    } else {
      alert("Số điện thoại phải có đúng 10 chữ số");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFix = (event) => {
    event.preventDefault();
    const foundData = submittedData.filter(data => data.name === formData.namefind);
    setFindData(foundData)
    console.log("Found data:", foundData);

  };

  const handleDeleteDuplicates = (event) => {
    event.preventDefault();

    const uniqueData = submittedData.filter((data, index, self) =>
      index === self.findIndex((t) => (
        t.name === data.name && t.numberphone === data.numberphone
      ))
    );
    setSubmittedData(uniqueData);
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]})-${match[2]}-${match[3]}`;
    }
    return null;
  };

  return (
    <div className="w-ttt h-ttt m-3">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tên"
            className="bg-slate-300 border-2 border-gray-200 outline-none text-white ml-2 rounded-lg p-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="bg-slate-300 border-2 border-gray-200 outline-none text-white ml-2 rounded-lg p-2"
            name="numberphone"
            value={formData.numberphone}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-sky-600 w-6 ml-2 rounded-lg"
          >
            Thêm
          </button>
        </form>
      </div>

      <hr className="mt-4" />

      <div>
        <form onSubmit={handleFix}>
          <input
            type="text"
            placeholder="Tìm"
            className="bg-slate-300 border-2 border-gray-200 outline-none text-white ml-2 rounded-lg p-2"
            name="namefind"
            value={formData.namefind}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-sky-600 w-6 ml-2 rounded-lg"
          >
            Tìm
          </button>
          <button
            type="button"
            className="bg-sky-600 w-6 ml-2 rounded-lg"
            onClick={handleDeleteDuplicates}
          >
            Xóa Trùng
          </button>

        </form>
        
      </div>

      <div>
        <ul>
        {formData.namefind.length > 0 ? (
      findData.map((data, index) => (
        <li key={index} className='flex justify-between p-5 bg-slate-300 mt-3 mb-3 rounded-lg'>
          <div>{data.name}</div>
          <div>{formatPhoneNumber(data.numberphone)}</div>
        </li>
      ))
    ) : (
      submittedData.map((data, index) => (
        <li key={index} className='flex justify-between p-5 bg-slate-300 mt-3 mb-3 rounded-lg'>
          <div>{data.name}</div>
          <div>{formatPhoneNumber(data.numberphone)}</div>
        </li>
      ))
    )}
        </ul>
      </div>
    </div>
  );
};

export default Rt;
