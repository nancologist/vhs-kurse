export const randomDate = () => {
    let day = Math.ceil(Math.random() * 28) + 1;
    day = day < 10 ? "0" + day : day;

    let month = [Math.floor(Math.random() * 12)];
    month = month < 10 ? "0" + month : month;

    const year = ['2021', '2022', '2023'][Math.floor(Math.random() * 3)];

    return `${year}-${month}-${day}`;
};