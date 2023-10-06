import React, { useState } from 'react'

const Searchbox = () => {

    const motherTongueOptions = [
        'English',
        'Spanish',
        'French',
        'German',
        'Hindi',
        'Arabic',
        'Chinese',
        'Japanese',
        'Other', // Add more mother tongue options as needed
    ];

    const religionOptions = [
        'Hindu',
        'Christian',
        'Sikh',
        'Other', // Add more religion options as needed
    ];

    const [selectedMT, setselectedMT] = useState('');
    const [selectedGender, setselectedGender] = useState('');
    const [fromValue, setFromValue] = useState(18);
    const [toValue, setToValue] = useState(40);
    const [selectedReligion, setselectedReligion] = useState('');

    const handleFromInputChange = (e) => {
        const inputValue = e.target.value;
        !isNaN(inputValue) && setFromValue(parseFloat(inputValue));
    };


    const handleToInputChange = (e) => {
        const inputValue = e.target.value;
        !isNaN(inputValue) && setToValue(parseFloat(inputValue));
    };


    const handleGenderChange = ({ e }) => setselectedGender(e.value);
    const handleReligionChange = ({ target }) => setselectedReligion(target.value);
    const handleMTChange = ({ target }) => setselectedMT(target.value);

    const onSearchClick = () => {
        // Search actions
    }

    return (
        <>
            <div className="container flex bg-white p-8 m-10">
                <div className="looking flex-3 mx-5">
                    <label className="block font-bold mb-2">I'm looking for</label>
                    <div className="">
                        <label className="items-center">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                name="option"
                                value="Bride"
                                checked={selectedGender === 'Bride'}
                                onChange={handleGenderChange}
                            />
                            <span className="ml-2">Bride</span>
                        </label>
                        <label className="items-center ml-6">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                name="option"
                                value="Groom"
                                checked={selectedGender === 'Groom'}
                                onChange={handleGenderChange}
                            />
                            <span className="ml-2">Groom</span>
                        </label>
                    </div>
                </div>
                <div className="age flex-2 mx-5 mb-2">
                    <label className="block font-bold">Age</label>
                    <input
                        type="text"
                        id="fromInput"
                        value={fromValue}
                        onChange={handleFromInputChange}
                        className="w-10 mx-2 px-2 py-1 rounded-md border border-gray-100"
                    />
                    <label htmlFor="toInput">To</label>
                    <input
                        type="text"
                        id="toInput"
                        value={toValue}
                        onChange={handleToInputChange}
                        className="w-10 mx-2 px-2 py-1 rounded-md border border-gray-100"
                    />
                </div>
                <div className="religion flex-2 mx-5 mb-2">
                    <label className="block font-bold">Religion/Caste</label>
                    <select
                        id="religionCasteDropdown"
                        value={selectedReligion}
                        onChange={handleReligionChange}
                    >
                        <option value="">Cameron</option>
                        {religionOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mother flex-2 mx-5 mb-2">
                    <label className="block font-bold">Select Mother Tongue</label>
                    <select
                        id="motherTongueDropdown"
                        value={selectedMT}
                        onChange={handleMTChange}
                    >
                        <option value="">Williamson</option>
                        {motherTongueOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="Search-btn flex-3 ml-10">
                    <button
                        className="bg-red-500 custom-hover-bg text-white font-bold py-2 px-4 rounded"
                        onClick={onSearchClick}
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default Searchbox