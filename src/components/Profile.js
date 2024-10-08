import React from 'react';

function Profile() {
    return (
        <section style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: 'rgb(43, 7, 7, 0.9)'
        }}>
            <img
                src="https://harvestlane.com/cdn/shop/articles/blog-image-size_b7039207-0ddb-4a99-8401-0dd704c24f1f.jpg?v=1645036664&width=1100"
                alt="Beekeeping"
                style={{
                    width: '80%',
                    maxWidth: '600px', 
                    borderRadius: '10px', 
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                }}
            />
        </section>
    );
}

export default Profile;
