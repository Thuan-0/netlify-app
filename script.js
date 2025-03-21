const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerText = '❄'; // Ký tự tuyết
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'em'; // Độ lớn tuyết

    // Thêm vào body
    document.body.appendChild(snowflake);

    // Thời gian rơi ngẫu nhiên
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Thời gian rơi từ 2 đến 5 giây

    // Xóa tuyết khi nó rơi xong
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
};

// Tạo tuyết rơi mỗi 300ms
setInterval(createSnowflake, 3000);
