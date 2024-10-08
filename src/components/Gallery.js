import React from 'react';

function Gallery() {
    return (
        <section className="img_gallery1">
            <h2>Gallery</h2>
            <div className="img_gallery">
                <figure>
                    <img src="https://beekeeper.in.ua/images/products/64/64660ffb0a6be145591855_resized.png" alt="Apidomik" />
                    <figcaption><b>Apidomik</b></figcaption>
                    <figcaption><b>$435</b></figcaption>
                </figure>
                <figure>
                    <img src="https://beekeeper.in.ua/images/products/64/64660f2b62eb7208463954_resized.png" alt="Vulik recliner 24 frames" />
                    <figcaption><b>Vulik recliner 24 frames</b></figcaption>
                    <figcaption><b>$40</b></figcaption>
                </figure>
                <figure>
                    <img src="https://beekeeper.in.ua/images/products/66/663db309bf237213095031_resized.png" alt="Polish barrel" />
                    <figcaption><b>Polish barrel</b></figcaption>
                    <figcaption><b>$5</b></figcaption>
                </figure>
            </div>
        </section>
    );
}

export default Gallery;
