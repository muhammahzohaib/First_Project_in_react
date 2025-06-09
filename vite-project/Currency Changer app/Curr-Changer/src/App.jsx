import React,{useState} from 'react'
import bgimage from './assets/bgimage.jpg'
import {InputBox} from './Components'
import  UseCurrencyinfo from './CustomHooks/UseCurrencyinfo'

function App() {
    const [amount, setAmount] = useState("");
   
    const [from, setfrom] =useState("usd");
    const [to, setto] = useState("pkr");
    const [convertedamount, setConvertedAmount] = useState(0);

  const currencyinfo = UseCurrencyinfo(from)

  // extract key form Api 
  const options = Object.keys(currencyinfo)
console.log("currencyinfo", currencyinfo);

  // swap 
    const swap = () => {
        setfrom(to);
        setto(from);
        setConvertedAmount(amount);
        setAmount(convertedamount);
    }


    const convert = () => {setConvertedAmount(amount * currencyinfo[to])};
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${bgimage}')`,
            }}
        >
            <div className="w-full flex h-1/2 justify-center items-center   gap-1.5 max-w-md mx-auto border border-white rounded-lg  backdrop-blur-sm bg-white/30">
               
                    <form  className='w-10/12  flex flex-col justify-center items-center gap-2 p-40'
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();

                           
                        }}
                    >
                        <div className="w-full h-20   ">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectCurrency={from}
                                onCurrencyChange={ (currency)=> setAmount(amount)}
                                


                            />
                        </div>
                        <div className="relative w-full   ">
                            <button
                                type="button"
                                onClick={swap}
                                className=" w-20 h-10 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-1 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full h-20 mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedamount}
                                currencyoptions={options}
                                onCurrencyChange={(currency) => setto(currency)}
                                selectCurrency={to}
                                amountdisabled
                            
                            />
                        </div>




                        
                        <button type="submit" className="w-full   h-13 bg-blue-600 text-white  rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                
            </div>
        </div>
    );
  }

  export default App;