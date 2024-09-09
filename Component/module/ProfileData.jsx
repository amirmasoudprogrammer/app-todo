import React from 'react';

function ProfileData({data}) {
    return (
        <div className="profile-data">
            <div>
                <span>Name:</span>
                <p>{data.name}</p>
            </div>
            <div>
                <span>LastName:</span>
                <p>{data.lastName}</p>
            </div>
            <div>
                <span>email:</span>
                <p>{data.email}</p>
            </div>
        </div>
    );
}

export default ProfileData;