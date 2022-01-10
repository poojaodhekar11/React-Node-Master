import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/contacts');
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            <div className="container-fluid p-3 w-50" >
                {items.map(item => (
                    <div className="card-deck mb-3" key={item.id}>
                        <div className="card">
                            <div className="card-body p-1 people-nearby">
                                <div className="nearby-user">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-12 text-sm-center">
                                            <Link to={`/employee/${item.id}`}> <img src={`https://www.bootdey.com/img/Content/avatar/avatar${item.id}.png`} alt="user" className="profile-photo-lg" /></Link>
                                        </div>
                                        <div className="col-md-9 col-sm-12 text-sm-center text-md-left">
                                            <h5> <Link to={`/employee/${item.id}`} className="profile-link" >{item.name}</Link></h5>
                                            <p>{item.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Contact;