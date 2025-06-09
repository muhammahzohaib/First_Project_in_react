
import React, {useId} from "react";

function InputBox({ label, className = "", amount, onAmountChange, onCurrencyChange,currencyoptions = [],
    selectCurrency = "usd",amountdisabled = false , currencydisabled = false }) 
{
   const amountinputid = useId();

    return (
        <div className={ ` w-full h-full bg-white px-4  rounded-lg text-sm flex  justify-evenly items-center ${className} `}>
            <div className="w-1/3 h-1/2  p-10 flex flex-col justify-center gap-2 ml-6 ">
                <label  htmlFor={amountinputid} className=" px-4  text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountinputid}
                    className={`outline-none w-full bg-transparent py-1.5 ${className}`}
                    type="number"
                    placeholder=" Enter Amount"
                    disabled={amountdisabled}
                    value={amount}
                    onChange={(e)=>{
                        const value = e.target.value;
                        // onAmountChange && onAmountChange(Number(e.target.value))
                        onAmountChange && onAmountChange(value === "" ? "" : Number(value));    
                    }}
                />
            </div>
            <div className="w-1/3 flex flex-wrap justify-end text-right ">
                <p className="text-black/40 mb-2 w-full text-align-center">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencydisabled}

                    >
                    
                        {
                            currencyoptions.map((currency) => (
                                // remember the key in jsx to improve the performance  
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                            ))
                        }
                
                </select>
            </div>
        </div>

    );
}

export default InputBox;
