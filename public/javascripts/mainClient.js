

const formEl = document.forms.setInfo;
formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();

       const formData = new FormData(ev.target);
    const { data } = await axios.post('/main', formData);

    
    console.log('res:', data)
});