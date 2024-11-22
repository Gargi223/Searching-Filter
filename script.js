document.addEventListener("DOMContentLoaded", () => {
  const categoryBtns = document.querySelectorAll(".category-btn"); // Category buttons
  const searchInput = document.getElementById("search-input"); // Search input field
  const searchBtn = document.getElementById("search-btn"); // Search button
  const productItems = document.querySelectorAll(".Product-item"); // All product items (fixed selector)

  // Function to filter products
  function filterProduct() {
      const searchValue = searchInput.value.toLowerCase();
      const activeCategory = document.querySelector(".category-btn.act").dataset.category.toLowerCase();

      productItems.forEach((item) => {
          const title = item.querySelector(".card-title").innerText.toLowerCase();
          const category = item.getAttribute("data-category").toLowerCase();

          // Display logic based on search and category
          if (
              (title.includes(searchValue) || searchValue === "") &&
              (category === activeCategory || activeCategory === "all")
          ) {
              item.style.display = "block";
          } else {
              item.style.display = "none";
          }
      });
  }

  // Function to handle category filtering
  function categoryProduct(event) {
      // Remove active class from all buttons
      categoryBtns.forEach((btn) => btn.classList.remove("act"));

      // Add active class to clicked button
      event.target.classList.add("act");

      // Apply filter
      filterProduct();
  }

  // Attach event listeners to category buttons
  categoryBtns.forEach((btn) => {
      btn.addEventListener("click", categoryProduct);
  });

  // Attach event listener to search button
  searchBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent form submission
      filterProduct();
  });

  // Attach event listener to search input field
  searchInput.addEventListener("keyup", filterProduct);
});
