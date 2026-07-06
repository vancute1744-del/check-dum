const letter = `Hehe, con bò ngồi cạnh con nai, con nai thấy thế "Happy 2 years Anniversary" =))))

Ừ thì thời gian như Quốc Duy chạy ngoài đồng, mới ngày nào còn bẽn lẽn đi phim phòng mà h đã Anni 2 năm, quáo.

Thấy Kz giỏi hok, Kz tự làm ra cái web này á, để khè QD á.

Kz chỉ muốn nói là Kz iu QD nhắm, iu như bị bỏ bùa dị á. ❤️

Ùm thì dạo này tụi mình đùng đùng dới nhau quài, nhma Kz thấy dui vì tụi mình vẫn ở lại với nhau.

Do tụi mình bị khùng và do tụi mình thương nhau nữa.

Sắp tới chắc là sẽ vẫn có những cái đùng đùng như dị á, nhma mong là tụi mình sẽ vẫn kiên nhẫn với nhau, trân trọng nhau và nhẹ nhàng với nhau như dị nha.

Dàaaaaaaaa, hi vọng là trên hành trình sắp tới tớ dới cậu sẽ có thêm nhiều kỉ niệm đáng nhớ, cùng nhau trải qua những cột mốc quan trọng trong đời mỗi người nhaaaaaaaaaaa.

Dị thôi đó, chứ muốn gì nữa.

Hoi chưn chưn, nào gặp cho buvu.

❤️ Ok chưaaaaaa ❤️`;

function openLetter() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("letter").style.display = "block";

    const typing = document.getElementById("typing");
    typing.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {
        typing.innerHTML += letter.charAt(i);
        i++;

        if (i >= letter.length) {
            clearInterval(timer);
        }
    }, 35);
}

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💕";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);

}, 400);
