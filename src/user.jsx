
export default function User({user}) {
    const {name, email, phone, website} = user;
    return (
        <div className='user'>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}