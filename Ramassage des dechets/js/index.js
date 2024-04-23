document.addEventListener('DOMContentLoaded', (event) =>
{
    var btnFrench = document.getElementById('btnFrench');
    var btnEnglish = document.getElementById('btnEnglish');

    function resetButtons()
    {
        btnFrench.style.backgroundColor = 'orange'
        btnEnglish.style.backgroundColor = 'orange'
    }

    function setActive(button)
    {
        resetButtons();
        button.style.backgroundColor = 'white'
    }

    btnFrench.addEventListener('click', function () { setActive(btnFrench); });
    btnEnglish.addEventListener('click', function () { setActive(btnEnglish); });
})