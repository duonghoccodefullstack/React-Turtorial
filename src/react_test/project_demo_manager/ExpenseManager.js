import { useState } from "react";
import Progrees from "./progress";

const ExpenseManagement = ({ isOpen, onClose }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isCloseBtn, setCloseBtn] = useState(true)
    const [taskList, setTaskList] = useState([])
    const [list, setList] = useState({
        name: "",
        amount: "",
        date: ""
    })

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const openForm = () => {
        setIsFormOpen(true);
        setCloseBtn(false)
    };
    const closeForm = () => {
        setIsFormOpen(false);
        setCloseBtn(true)
    };
    const handleAdd = (e) => {
        e.preventDefault();
        alert("")
        if ((day <= 31 && day > 0 && day !== " ") && (month >= 1 && month <= 12) && (year % 400 === 0 || (year > 1000 && year % 400 !== 0))) {
            setTaskList([...taskList, { ...list, date: `${day}-${month}-${year}` }])

        } else {
            alert("Sai định dạng ngày/tháng/năm")
        }

        setList({
            name: "",
            amount: "",
            date: ""
        })
        setDay('');
        setMonth('');
        setYear('');
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setList(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleDateChange = (e) => {
        const date = e.target.value;
        const [inputDay, inputMonth, inputYear] = date.split('/');
      
        setDay(inputDay);
        setMonth(inputMonth);
        setYear(inputYear);


    };

    return (
        <div
            className="w-screen h-screen font-Manager"
        >
            {isCloseBtn && (
                <div
                    className="bg-button_manager w-home_manager h-button_manager flex justify-center items-center"
                >

                    <form isOpen={isCloseBtn} onClose={closeForm}>
                        <button
                            className="bg-button_manager_color w-button_form_manager h-11  text-white rounded-lg  "
                            type="submit"
                            onClick={openForm}
                        >
                            ADD NEW EXPENSE
                        </button>
                    </form>
                </div>
            )}
            {isFormOpen && (
                <form isOpen={isFormOpen} onClose={closeForm}>
                    <div className="flex flex-col w-home_manager  bg-button_manager p-9">
                        <div className="flex justify-between my-2.5 ">
                            <p className="text-white"> Name</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name here ... "
                                className="w-3/4 outline-none p-2 rounded-xl   "
                                onChange={handleChange}
                                value={list.name}

                            ></input>
                        </div>
                        <div className="flex justify-between my-2.5 ">
                            <p className="text-white"> Amount</p>
                            <input
                                type="number"
                                name="amount"
                                placeholder="Enter amout here ... "
                                className="w-3/4 outline-none p-2 rounded-xl   "
                                onChange={handleChange}
                                value={list.amount}
                            ></input>
                        </div>
                        <div className="flex justify-between my-2.5 ">
                            <p className="text-white">Date</p>
                            <input
                                type="text"
                                name="date"
                                className="w-3/4 outline-none p-2 rounded-xl  text-gray-400"

                                onChange={handleDateChange}
                                value={`${day}/${month}/${year}`}
                            ></input>

                        </div>
                        <div className="mt-4">
                            <button
                                className="bg-[#862796] p-2 rounded-md text-white text-xs "
                                type="submit"
                                onClick={handleAdd}
                            >ADD</button>

                            <button
                                className="bg-gray-500 ml-5 p-2 rounded-md text-gray-400 text-xs "
                                type="submit"
                                onClick={closeForm}
                            >CANCEL</button>
                        </div>

                    </div>

                </form>

            )}

            <div className="w-home_manager h-home_manager bg-black p-home_manager" >
                <div className="flex justify-between"
                >
                    <p className="text-white">Filter by year</p>
                    <select className="w-option_manager h-8 text-center outline-none rounded-lg">
                        <option value="someOption">2022</option>
                        <option value="otherOption">2023</option>
                    </select>
                </div>
                <div className="">
                    <div><Progrees></Progrees></div>
                </div>
                <ul className="text-white">

                    {taskList.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-col bg-[#1A1A1A] p-[10px] w-[114px] rounded-lg items-center">
                                <p className="font-Manager text-[14px]">{item.date[2]}</p>
                                <p className="font-bold text-[14px]">
                                    {item.date[4]}
                                    {item.date[5]}
                                    {item.date[6]}
                                    {item.date[7]}
                                </p>
                                <p className="font-bold text-[20px]"> {item.date[0]}</p>
                            </div>

                        </div>
                        // <li key={index}>
                        //     <p>Name: </p>
                        //     <p>Amount: {item.amount}</p>
                        //     <p>Date: {item.date}</p>

                        //     {/* <p>{}</p> */}
                        //     <hr className="border-gray-500 my-2" />
                        // </li>
                        // <li key={index}>
                        //     <p>day</p>
                        //     {item.date[0]}
                        //     <p>month</p>
                        //     {item.date[2]}
                        //     <p>year</p>


                        //     {/* {item.date[3]} */}
                        // </li>
                    ))}

                </ul>
                <div className="text-white flex justify-between bg-[#575757] rounded-lg">
                    <div className="flex p-[10px]">

                        {/* <div>
                            <div className="flex flex-col bg-[#1A1A1A] p-[10px] w-[114px] rounded-lg items-center">
                                <p className="font-Manager text-[14px]">January</p>
                                <p className="font-bold text-[14px]">2022</p>
                                <p className="font-bold text-[20px]">16</p>
                            </div>
                            <h1 className="pl-[10px] mt-4 font-bold text-[36px]">{item.name}</h1>
                            <div className="" >
                                <p className="font-bold mt-6 mr-[10px] justify-center text-[24px] bg-[#862796] py-2.5 px-[20px] rounded-lg">$ 50</p>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
            <div></div>
        </div>
    );
}

export default ExpenseManagement;