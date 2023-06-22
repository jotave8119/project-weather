export class Toast {

    static createToast(text, color){
        Toastify({
            text: text,
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: color,
            },
          }).showToast();
    }
};
