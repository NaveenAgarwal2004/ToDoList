const input = document.querySelector('#task');
const button = document.querySelector('#add');

button.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) addList(e);
});

function addList(e) {
    e.preventDefault();
    const NComp = document.querySelector('.NComp');
    const Comp = document.querySelector('.Comp');

    if (input.value.trim() === '') return;

    const newLi = document.createElement('li');
    const ChkBtn = document.createElement('button');
    const DelBtn = document.createElement('button');

    ChkBtn.innerHTML = '<i class="fa fa-check"></i>';
    DelBtn.innerHTML = '<i class="fa fa-trash"></i>';

    newLi.textContent = input.value;
    input.value = '';
    NComp.append(newLi);
    newLi.append(ChkBtn);
    newLi.append(DelBtn);

    // Check Button - Complete Task
    ChkBtn.addEventListener('click', function() {
        const big = this.parentNode;
        big.classList.toggle('done');
        if (big.classList.contains('done')) {
            big.remove();
            Comp.append(big);
        } else {
            big.remove();
            NComp.append(big);
        }
    });

    // Delete Button - Remove Task
    DelBtn.addEventListener('click', function() {
        const big = this.parentNode;
        big.remove();
    });
}
