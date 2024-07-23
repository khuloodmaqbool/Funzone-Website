

function register() {
    // Clear previous error messages and reset border color
    document.querySelectorAll('.error').forEach(function(span) {
        span.textContent = '';
    });

    document.querySelectorAll('input').forEach(function(input) {
        input.classList.remove('invalid');
    });

    // Get form values
    var name = document.getElementById("individualName").value.trim();
    var email = document.getElementById("individualEmail").value.trim();
    var phone = document.getElementById("individualPhone").value.trim();

    // Validation flags
    var valid = true;

    // Name validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (name === "") {
        document.getElementById('individualNameError').textContent = 'Please fill out this field';
        document.getElementById('individualName').classList.add('invalid');
        valid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('individualNameError').textContent = 'Enter a correct name';
        document.getElementById('individualName').classList.add('invalid');
        valid = false;
    }

    // Email validation
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (email === "") {
        document.getElementById('individualEmailError').textContent = 'Please fill out this field';
        document.getElementById('individualEmail').classList.add('invalid');
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('individualEmailError').textContent = 'Invalid email';
        document.getElementById('individualEmail').classList.add('invalid');
        valid = false;
    }

    // Phone validation
    var phoneRegex = /^03\d{9}$/;
    if (phone === "") {
        document.getElementById('individualPhoneError').textContent = 'Please fill out this field';
        document.getElementById('individualPhone').classList.add('invalid');
        valid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('individualPhoneError').textContent = 'Enter a correct number';
        document.getElementById('individualPhone').classList.add('invalid');
        valid = false;
    }

    // If all fields are valid, clear form and show success message
    if (valid) {
        
        var thankYouMessage = 'Thank you!\n\nYour form has been submitted. We will contact you shortly to confirm your registration through a phone call.';
        alert(thankYouMessage);
        document.getElementById("individualRegistrationForm").reset();
        $('#summerSplashIndividualModal').modal('hide'); // Hide the modal
    }
}




    function registerGroup() {
        // Clear previous error messages and remove invalid class
        document.getElementById('groupNameError').textContent = '';
        document.getElementById('groupEmailError').textContent = '';
        document.getElementById('groupPhoneError').textContent = '';
        document.getElementById('groupSizeError').textContent = '';
        
        // Remove invalid class from all input fields
        var inputs = document.querySelectorAll('.form-control');
        inputs.forEach(function(input) {
            input.classList.remove('invalid');
        });
    
        // Get form values
        var groupName = document.getElementById("groupName").value;
        var groupEmail = document.getElementById("groupEmail").value;
        var groupPhone = document.getElementById("groupPhone").value;
        var groupSize = document.getElementById("groupSize").value;
    
        // Validation flags
        var valid = true;
    
        // Group Name validation
        var nameRegex = /^[a-zA-Z\s]+$/;
        if (groupName === "") {
            document.getElementById('groupNameError').textContent = 'Please fill out this field';
            document.getElementById('groupName').classList.add('invalid');
            valid = false;
        } else if (!nameRegex.test(groupName)) {
            document.getElementById('groupNameError').textContent = 'Enter a correct name';
            document.getElementById('groupName').classList.add('invalid');
            valid = false;
        }
    
        // Email validation
        var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (groupEmail === "") {
            document.getElementById('groupEmailError').textContent = 'Please fill out this field';
            document.getElementById('groupEmail').classList.add('invalid');
            valid = false;
        } else if (!emailRegex.test(groupEmail)) {
            document.getElementById('groupEmailError').textContent = 'Invalid email';
            document.getElementById('groupEmail').classList.add('invalid');
            valid = false;
        }
    
        // Phone validation
        var phoneRegex = /^03\d{9}$/;
        if (groupPhone === "") {
            document.getElementById('groupPhoneError').textContent = 'Please fill out this field';
            document.getElementById('groupPhone').classList.add('invalid');
            valid = false;
        } else if (!phoneRegex.test(groupPhone)) {
            document.getElementById('groupPhoneError').textContent = 'Enter a correct number';
            document.getElementById('groupPhone').classList.add('invalid');
            valid = false;
        }
    
        // Group Size validation
        if (groupSize === "") {
            document.getElementById('groupSizeError').textContent = 'Please fill out this field';
            document.getElementById('groupSize').classList.add('invalid');
            valid = false;
        } else if (parseInt(groupSize) < 2) { // Adjusted condition here
            document.getElementById('groupSizeError').textContent = 'Group size must be greater than 1';
            document.getElementById('groupSize').classList.add('invalid');
            valid = false;
        }
    
        // If all fields are valid, clear form and show success message
        if (valid) {

            var thankYouMessage = 'Thank you!\n\nYour form has been submitted. We will contact you shortly to confirm your registration through a phone call.';
            alert(thankYouMessage);

            document.getElementById("groupRegistrationForm").reset();
            $('#summerSplashGroupModal').modal('hide'); // Hide the modal
        }
    }
    