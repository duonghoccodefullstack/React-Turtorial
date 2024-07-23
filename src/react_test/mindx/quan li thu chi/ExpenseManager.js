import Progrees from "./progress";

const ExpenseManagement = () => { 
    const handleAdd = () => {
        alert("hello")
    }
    return (
        <div
            className="w-screen h-screen font-Manager"
        >
            {/* <div
                className="bg-button_manager w-home_manager h-button_manager flex justify-center items-center"
            >
                <button className="bg-button_manager_color w-button_form_manager h-11  text-white rounded-lg  ">
                    ADD NEW EXPENSE
                </button>
               
            </div> */}
            <div>
                <form>
                    <div className="flex flex-col w-home_manager  bg-button_manager p-9">
                        <div className="flex justify-between my-2.5 ">
                            <p className="text-white"> Name</p>
                            <input
                                type="text"
                                placeholder="Enter name here ... "
                                className="w-3/4 outline-none p-2 rounded-xl   "
                            ></input>
                        </div>
                        <div className="flex justify-between my-2.5 ">
                            <p className="text-white"> Amount</p>
                            <input
                                type="number"
                                placeholder="Enter amout here ... "
                                className="w-3/4 outline-none p-2 rounded-xl   "
                            ></input>
                        </div>
                        <div className="flex justify-between my-2.5 ">
                            <p className="text-white">Date</p>
                            <input
                                type="date"

                                className="w-3/4 outline-none p-2 rounded-xl  text-gray-400 "
                            ></input>
                            
                        </div>
                        <div className="mt-4 ">
                            <button
                                className="bg-[#862796] p-2 rounded-md text-white text-xs "
                                type="submit"
                                onClick={handleAdd}
                            >ADD</button>

                            <button
                                className="bg-gray-500 ml-5 p-2 rounded-md text-gray-400 text-xs "
                                type="submit"
                                onClick={handleClose}
                            >CANCEL</button>
                        </div>
                      
                    </div>

                </form>
            </div>
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
                <div className="text-white flex justify-between bg-[#575757] rounded-lg">
                    <div className="flex p-[10px]">

                        <div className="flex flex-col bg-[#1A1A1A] p-[10px] w-[114px] rounded-lg items-center">
                            <p className="font-Manager text-[14px]">January</p>
                            <p className="font-bold text-[14px]">2022</p>
                            <p className="font-bold text-[20px]">16</p>
                        </div>
                        <h1 className="pl-[10px] mt-4 font-bold text-[36px]">Some Book</h1>
                    </div>
                    <div className="" >
                        <p className="font-bold mt-6 mr-[10px] justify-center text-[24px] bg-[#862796] py-2.5 px-[20px] rounded-lg">$ 50</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default ExpenseManagement;