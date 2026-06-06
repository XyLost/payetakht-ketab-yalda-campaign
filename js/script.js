options.forEach((option) => {
  option.addEventListener("click", () => {
    // حذف کلاس 'selected' از همه گزینه‌ها
    options.forEach((item) => item.classList.remove("selected"));

    // اضافه کردن کلاس 'selected' به گزینه‌ای که روی آن کلیک شده
    option.classList.add("selected");
  });
});
