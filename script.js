// 페이지 로드 시 애니메이션 효과
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section, footer");
    sections.forEach(section => {
        section.style.opacity = 1;
    });
});
