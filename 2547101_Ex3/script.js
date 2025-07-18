 const form = document.getElementById('studentForm');
const output = document.getElementById('output');
const displayInfo = document.getElementById('displayInfo');


  // Preferred Time highlight
  document.querySelectorAll('input[name="preferredTime"]').forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.time-label').forEach(label => {
        label.classList.remove('selected-label');
      });
      const selectedLabel = input.closest('label');
      if (selectedLabel) selectedLabel.classList.add('selected-label');
    });
  });

  // Session Mode highlight (radio buttons)
  document.querySelectorAll('input[name="sessionMode"]').forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.session-label').forEach(label => {
        label.classList.remove('selected-label');
      });
      const selectedLabel = input.closest('label');
      if (selectedLabel) selectedLabel.classList.add('selected-label');
    });
  });




  form.addEventListener('submit', (e) => {
    e.preventDefault();

 const name = document.querySelector('#fullName').value;
  const email = document.querySelector('#email').value;
  const course = document.querySelector('#course').value;
  const time = document.querySelector('input[name="preferredTime"]:checked')?.value || 'Not selected';
  const sessionMode = document.querySelector('input[name="sessionMode"]:checked')?.value || 'Not selected';

   displayInfo.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Preferred Time:</strong> ${time}</p>
      <p><strong>Session Mode:</strong> ${sessionMode}</p>
    `;

    output.classList.remove('hidden');
  });