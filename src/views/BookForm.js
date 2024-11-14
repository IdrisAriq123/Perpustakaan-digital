export class BookForm {
    constructor() {
      this.formContainer = document.getElementById("book-form");
    }
  
    render(onSubmit) {
      this.formContainer.innerHTML = `
          <div class="card shadow-neumorphic form-card glassy">
              <div class="card-body">
                  <h2 class="h2 mb-3">Tambah/Edit Buku</h2>
                  <form id="book-form">
                      <div class="mb-3">
                      <label for="title" class="form-label">Judul Buku</label>
                      <input type="text" class="form-control rounded-pill neumorphic-input" id="title" placeholder="Judul Buku" required>
                  </div>
                  <div class="mb-3">
                      <label for="author" class="form-label">Penulis</label>
                      <input type="text" class="form-control rounded-pill neumorphic-input" id="author" placeholder="Penulis Buku" required>
                  </div>
                  <div class="mb-3">
                      <label for="year" class="form-label">Tahun Terbit</label>
                      <input type="number" class="form-control text-warna rounded-pill neumorphic-input" id="year" placeholder="Tahun Buku" required>
                  </div>
                  <div class="mb-3">
                      <label for="genre" class="form-label">Genre</label>
                      <select class="form-control rounded-pill neumorphic-input" id="genre" required>
                          <option value="">Pilih Genre</option>
                          <option value="Action">Action</option>
                          <option value="Adventure">Adventure</option>
                          <option value="Comedy">Comedy</option>
                          <option value="Romance">Romance</option>
                          <option value="Fantasy">Fantasy</option>
                          <option value="Drama">Drama</option>
                          <option value="Mystery">Mystery</option>
                          <option value="SOL">SOL</option>
                          <option value="Shounen">Shounen</option>
                          <option value="Isekai">Isekai</option>
                          <option value="Ec*hi">Ec*hi</option>
                          <option value="Sports"></option>
                      </select>
                  </div>
                  <button type="submit" class="btn btn-primary w-100 rounded-pill mt-3">Simpan Buku</button>
              </form>
              </div>
          </div>
          `;
  
      this.formContainer.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = document.getElementById("year").value;
        const genre = document.getElementById("genre").value;
        onSubmit({ title, author, year, genre });
        this.resetForm();
      });
    }
  
    if(book) {
      this.fillForm(book);
    }
  
    fillForm(book) {
      document.getElementById("title").value = book.title;
      document.getElementById("author").value = book.author;
      document.getElementById("year").value = book.year;
      document.getElementById("genre").value = book.genre;
    }
  
    resetForm() {
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("year").value = "";
      document.getElementById("genre").value = "";
    }
  }
  