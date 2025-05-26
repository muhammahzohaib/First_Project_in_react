
import { useState } from "react"

export default function Accordian()  {
    const {selected, setselected} = useState(null)

    return <div classname="wrapper">
        <div className="accordian">
            data && data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="accordian-item">
                        <div className="accordian-header" onClick={() => setselected(selected === index ? null : index)}>
                            {item.title}
                        </div>
                        {selected === index && (
                            <div className="accordian-content">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )
        </div>
    </div>
}