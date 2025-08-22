async function getResult() {
  const regNo = document.getElementById("regNo").value.trim();
  const resultDiv = document.getElementById("result");

  if (!regNo) {
    resultDiv.innerHTML = "<p class='text-red-600 font-semibold'>⚠️ Please enter Register No.</p>";
    return;
  }

  try {
    const res = await fetch(`http://localhost:5000/api/students/result/${regNo}`);
    if (!res.ok) {
      resultDiv.innerHTML = "<p class='text-red-600 font-semibold'>❌ Student not found!</p>";
      return;
    }

    const data = await res.json();

    resultDiv.innerHTML = `
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg animate-fadeIn">
        <h2 class="text-xl font-bold text-gray-800 mb-3">
          👤 ${data.name} <span class="text-gray-500">(${data.register_no})</span>
        </h2>

        <div class="grid grid-cols-2 gap-3 text-sm text-left">
          <p class="font-medium">📘 Subject 1: <span class="font-bold">${data.marks.subject1}</span></p>
          <p class="font-medium">📗 Subject 2: <span class="font-bold">${data.marks.subject2}</span></p>
          <p class="font-medium">📕 Subject 3: <span class="font-bold">${data.marks.subject3}</span></p>
          <p class="font-medium">📙 Subject 4: <span class="font-bold">${data.marks.subject4}</span></p>
          <p class="font-medium">📒 Subject 5: <span class="font-bold">${data.marks.subject5}</span></p>
        </div>

        <div class="mt-4 text-lg font-semibold">
          📝 Total: <span class="text-indigo-600">${data.total}</span>
        </div>
        <div class="text-lg font-semibold">
          📊 Percentage: <span class="text-purple-600">${data.percentage.toFixed(2)}%</span>
        </div>

        <div class="mt-4">
          <span class="inline-block px-4 py-2 rounded-full text-white font-bold shadow-md
            ${data.status === "PASS" 
              ? "bg-green-500 animate-bounce" 
              : "bg-red-500 animate-pulse"}">
            ${data.status === "PASS" ? "✅ PASS" : "❌ FAIL"}
          </span>
        </div>
      </div>
    `;
  } catch (error) {
    resultDiv.innerHTML = "<p class='text-red-600 font-semibold'>⚠️ Error fetching result.</p>";
  }
}
