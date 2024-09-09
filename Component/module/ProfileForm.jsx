import React from 'react';

function ProfileForm({name, lastName, password, starthandler, setName, setLastName, setPassword}) {
    return (
        <>
            <div className="profile-form__input">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                </div>
                <div>
                    <label htmlFor="lastName">lastName:</label>
                    <input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           type="password"/>
                </div>
            </div>
            <button onClick={starthandler}>ارسال</button>
        </>
    );
}

export default ProfileForm;
