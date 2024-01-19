function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let videos = [
    { title: "Introduction to JavaScript", image: "https://picsum.photos/id/47/400/301", verified: true, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "React Basics for Beginners", image: "https://picsum.photos/id/54/400/301", verified: false, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "Building RESTful APIs with Node.js", image: "https://picsum.photos/id/12/400/301", verified: true, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "Python Web Scraping Tutorial", image: "https://picsum.photos/id/43/400/301", verified: false, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "Data Visualization with D3.js", image: "https://picsum.photos/id/36/400/301", verified: true, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "Mobile App Development with React Native", image: "https://picsum.photos/id/89/400/301", verified: false, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "Machine Learning Fundamentals", image: "https://picsum.photos/id/21/400/301", verified: true, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "Cybersecurity Best Practices", image: "https://picsum.photos/id/75/400/301", verified: false, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "Introduction to Blockchain Technology", image: "https://picsum.photos/id/92/400/301", verified: true, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() },
    { title: "UX/UI Design Principles", image: "https://picsum.photos/id/66/400/301", verified: false, views: `${getRandomNumber(1, 100)}K`, time: getRandomTime() }
];

function getRandomTime() {
    const randomValue = getRandomNumber(1, 10);
    if (randomValue <= 5) {
        // Represent time in minutes
        return `${getRandomNumber(1, 60)} minutes`;
    } else if (randomValue <= 8) {
        // Represent time in hours
        return `${getRandomNumber(1, 24)} hours`;
    } else {
        // Represent time in days
        return `${getRandomNumber(1, 7)} days`;
    }
}


export default videos