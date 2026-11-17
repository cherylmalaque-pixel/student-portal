// 1. Welcome alert trigger function
function triggerWelcomeAlert() {
  alert("Hello Gerald! You have 1 pending announcement regarding the Phase 3 Bootstrap project guidelines.");
}

// 2. View module details dynamically in a modal
function viewModuleDetails(title, description) {
  document.getElementById('modalModuleTitle').innerText = title;
  document.getElementById('modalModuleDesc').innerText = description;
  var myModal = new bootstrap.Modal(document.getElementById('moduleModal'));
  myModal.show();
}

// 3. Save profile updates dynamically to UI
function saveProfileChanges() {
  const newName = document.getElementById('modalName').value;
  if(newName) {
    document.querySelector('.card-title.fw-bold').innerText = newName;
  }
  var modalEl = document.getElementById('editProfileModal');
  var modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
  alert("Profile updated successfully!");
}

// 4. Filter subjects live via search input
function filterSubjects() {
  let query = document.getElementById('subjectSearch').value.toLowerCase();
  let items = document.querySelectorAll('.subject-card-item');
  items.forEach(item => {
    let name = item.getAttribute('data-name');
    if(name.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// 5. Bootstrap 5 Form Validation Handler
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault();
          alert("Registration submitted successfully! Thank you, Gerald.");
          form.reset();
          form.classList.remove('was-validated');
          return;
        }
        form.classList.add('was-validated')
      }, false)
    })
})();