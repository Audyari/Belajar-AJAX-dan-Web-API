
const form = document.querySelector('#search-form');

// 1. menunggu" sampai pengguna mengklik tombol submit pada form.
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    document.querySelectorAll('img').forEach((img) => img.remove());

    const keyword = form.elements.query.value;
    const config = {
        params: { q: keyword },
    };

    //2. mengambil data dari internet (dari API tvmaze).
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    getImages(res.data);
    form.elements.query.value = '';
});

const getImages = (shows) => {
    // 3. menampilkan gambar yang diterima dari API.
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            //4. menambahkan gambar ke dalam halaman web.
            document.body.append(img);
        }
    }
};
