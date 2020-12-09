'use strict'

    const form = document.getElementById('form_pas');
    const btn = document.querySelector('.btn');


       form.addEventListener('click', function (event) {
           console.log(event.target)
           const target = event.target;
           if(target.tagName === 'I') {
               if(target.previousElementSibling.getAttribute('type') === 'password') {
                   target.previousElementSibling.setAttribute('type', 'text')
                   target.classList.toggle('fa-eye');
                   target.classList.toggle('fa-eye-slash');
               } else if (target.previousElementSibling.getAttribute('type') === 'text') {
                   target.previousElementSibling.setAttribute('type', 'password')
                   target.classList.toggle('fa-eye-slash');
                   target.classList.toggle('fa-eye');
               }
           }
       } )

        btn.addEventListener('click', function (event)  {
            event.preventDefault();
            const input = document.getElementById('input').value;
            const inputRepeat = document.getElementById('repeat_input').value;
            const error = document.getElementById('error');
                if(input === inputRepeat) {
                    alert('You`re welcome!')
                    error.style.display = '';
                } else {
                    error.style.display = 'block';
                }
        } )










