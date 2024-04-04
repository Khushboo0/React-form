import React , {useState} from 'react';

function ReactForm(){
    const [formData , setFormData] = useState({
        name:'',
        email:''
    });
    
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e)=>{
        setFormData({...formData ,[e.target.name]:e.target.value});

    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({name:'',email:''});
        // console.log(formData);
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name="name" value={formData.name} onChange={handleChange}/>
                <br/>
                </label>
                <label>
                Email: 
                
                <input type='text' name="email" value={formData.email} onChange={handleChange}/>
                <br/>
            </label>
            <button type='submit'> submit</button>
            {submittedData && (
                <div>
                    <br/>
                    <h2>Submitted Data:</h2>
                    <div>
                        <p>
                            Name: {submittedData.name}
                        </p>

                        <p>
                            Email: {submittedData.email}
                        </p>
                    </div>
                </div>
            )}

        </form>
    )

}

export default ReactForm;