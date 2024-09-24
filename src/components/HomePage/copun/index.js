export const handleCouponCopy = () => {
    const couponButtons = document.querySelectorAll('.couponBtn');
    couponButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const couponCode = event.target.previousElementSibling.innerText; // Get the coupon code from the sibling
            navigator.clipboard.writeText(couponCode)
                .then(() => {
                    button.innerHTML = 'copied';
                    setTimeout(() => {
                        button.innerHTML = 'copy code';
                    }, 3000);
                })
                .catch((err) => {
                    console.error('Failed to copy: ', err);
                });
        });
    });
};

export default handleCouponCopy;