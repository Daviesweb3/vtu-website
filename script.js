// Simple JavaScript for the airtime page
document.addEventListener('DOMContentLoaded', function() {
    // Network Selection
    const networkOptions = document.querySelectorAll('.network-option');
    networkOptions.forEach(option => {
        option.addEventListener('click', function() {
            networkOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            // Update summary
            const network = this.querySelector('p').textContent;
            document.getElementById('summaryNetwork').textContent = network
          })})})