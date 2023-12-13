const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');

container.addEventListener('mousemove', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    // console.log(x, y);
    const rotateY = -0.14 * x + 20;
    const rotateX = 0.1 * y - 20;

    overlay.style = `background-position: ${x / 5 + y / 5}%`;

    container.style = `transform: perspective(400px) 
                                rotateX(${rotateX}deg) 
                                rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseout', () => {
    overlay.style = 'transition: all 1s; opacity(0);';
    container.style = `transition: all 1s; transform: perspective(400px) rotateX(0) rotateY(0);`;
});