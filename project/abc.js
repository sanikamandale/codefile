document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('grievance-form');
    const userAgentField = document.getElementById('user-agent');
    const userAgentDetailsField = document.getElementById('user-agent-details');

    // Detect and set user-agent details
    const userAgent = navigator.userAgent;
    const browserInfo = getBrowserInfo(userAgent);
    const osInfo = getOSInfo(userAgent);

   
    userAgentField.value = userAgent;
    userAgentDetailsField.value = `${browserInfo.name} ${browserInfo.version}, ${osInfo.name} ${osInfo.version}`;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for demonstration

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

      
        const feedbackMessage = document.getElementById('feedback-message');
        feedbackMessage.textContent = `Grievance submitted successfully! User-Agent: ${data['user-agent']} Details: ${data['user-agent-details']}`;

        
        console.log('Form Data:', data);
    });

  
    function getBrowserInfo(userAgent) {
        let name, version;
        if (userAgent.includes('Firefox')) {
            name = 'Firefox';
            version = userAgent.split('Firefox/')[1];
        } else if (userAgent.includes('Chrome')) {
            name = 'Chrome';
            version = userAgent.split('Chrome/')[1].split(' ')[0];
        } else if (userAgent.includes('Safari')) {
            name = 'Safari';
            version = userAgent.split('Version/')[1].split(' ')[0];
        } else if (userAgent.includes('MSIE') || userAgent.includes('Trident')) {
            name = 'Internet Explorer';
            version = userAgent.split('MSIE ')[1] || userAgent.split('rv:')[1];
        } else {
            name = 'Unknown';
            version = 'Unknown';
        }
        return { name, version };
    }

    
    function getOSInfo(userAgent) {
        let name, version;
        if (userAgent.includes('Windows NT 10.0')) {
            name = 'Windows';
            version = '10';
        } else if (userAgent.includes('Windows NT 6.3')) {
            name = 'Windows';
            version = '8.1';
        } else if (userAgent.includes('Windows NT 6.2')) {
            name = 'Windows';
            version = '8';
        } else if (userAgent.includes('Windows NT 6.1')) {
            name = 'Windows';
            version = '7';
        } else if (userAgent.includes('Macintosh')) {
            name = 'Mac OS';
            version = userAgent.split('Mac OS X ')[1].split(')')[0];
        } else if (userAgent.includes('Android')) {
            name = 'Android';
            version = userAgent.split('Android ')[1].split(';')[0];
        } else if (userAgent.includes('iPhone')) {
            name = 'iOS';
            version = userAgent.split('iPhone OS ')[1].split(' ')[0];
        } else {
            name = 'Unknown';
            version = 'Unknown';
        }
        return { name, version };
    }
});
