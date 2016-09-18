/**
 * Created by John Muteti on 9/15/2016.
 */
var check_pass;
var check_step3;
var check_step5;
var check_step6;
var setReviewInfo;
// CONTROL SIGNUP PROCESS
$(document).ready(function () {

    // SHOW 'REVIEW INFORMATION'
    var f_email = $('#email');
    var f_username = $('#username');
    var f_password = $('#password');
    var f_theme = $('#choose_theme');
    var f_church_name = $('#name_of_church');
    var f_church_city = $('#name_of_city');
    var f_church_domain = $('#name_of_domain');
    var f_domain_owned = $('#checkbox_domain');
    var f_service1_checkbox = $('#service1-checkbox');
    var f_service1_name = $('#service1_name');
    var f_service1_time = $('#service1_time');
    var f_service2_checkbox = $('#service2-checkbox');
    var f_service2_name = $('#service2_name');
    var f_service2_time = $('#service2_time');
    var f_service3_checkbox = $('#service3-checkbox');
    var f_service3_name = $('#service3_name');
    var f_service3_time = $('#service3_time');
    var f_service4_checkbox = $('#service4-checkbox');
    var f_service4_name = $('#service4_name');
    var f_service4_time = $('#service4_time');
    var f_service5_checkbox = $('#service5-checkbox');
    var f_service5_name = $('#service5_name');
    var f_service5_time = $('#service5_time');
    var f_pastor_name = $('#pastor_name');
    var f_church_address = $('#church_address');
    var f_church_phone = $('#church_phone');
    var f_church_email = $('#church_email');
    var f_web_lead_name = $('#web_lead_name');
    var f_web_lead_phone = $('#web_lead_phone');
    var f_web_lead_email = $('#web_lead_email');
    var f_best_time_call = $('#best_time_to_call');


    // CONFIRM PASSWORD VALIDATION {STEP 1}
    var continue0 = $('#continue0');
    check_pass = function () {
        if ($('#password').val() == $('#confirm_password').val()) {
            if ($('#email').val() != '' && $('#username').val() != '' && $('#password').val() != '' && $('#confirm_password').val() != '') {
                document.getElementById('confirm_password').setCustomValidity('');
                continue0.removeAttr("disabled");
            }
        } else {
            document.getElementById('confirm_password').setCustomValidity('Please ensure both passwords match');
            continue0.attr("disabled", true);
        }
    };
// CONFIRM PASSWORD VALIDATION {STEP 1}

    // GOT TO STEP2
    continue0.click(function () {
        $('#step1').fadeOut(1000);
        $('#step2').fadeIn(1000);
    });
    // GOT TO STEP2

    // STEP2
    if ($('#choose_theme option:selected') && $('#choose_color option:selected')) {
        $('#continue1').removeAttr("disabled");
    } else {
        $('#continue1').attr('disabled', true);
    }
    // STEP2

    // GOT TO STEP3
    $('#continue1').click(function () {
        $('#step2').fadeOut(1000);
        $('#step3').fadeIn(1000);
    });
    // GOT TO STEP3

    // STEP3
    check_step3 = function () {
        if ($('#name_of_church').val() != '' && $('#name_of_city').val() != '' && $('#name_of_domain').val() != '') {
            $('#continue2').removeAttr("disabled");
        } else {
            $('#continue2').attr('disabled', true);
        }
    };
    // STEP3

    // GO TO STEP4
    $('#continue2').click(function () {
        $('#step3').fadeOut(1000);
        $('#step4').fadeIn(1000);
    });
    // GO TO STEP4

    // GO TO STEP5
    $('#continue3').click(function () {
        $('#step4').fadeOut(1000);
        $('#step5').fadeIn(1000);
    });
    // GO TO STEP5

    // STEP5
    check_step5 = function () {
        if ($('#pastor_name').val() != '' && $('#church_address').val() != '' && $('#church_phone').val() != '' && $('#church_email').val() != '') {
            $('#continue4').removeAttr('disabled');
        } else {
            $('#continue4').attr('disabled', true);
        }
    };
    // STEP5

    // GO TO STEP6
    $('#continue4').click(function () {
        $('#step5').fadeOut(1000);
        $('#step6').fadeIn(1000);
    });
    // GO TO STEP6

    // STEP6
    check_step6 = function () {
        if ($('#web_lead_name').val() != '' && $('#web_lead_phone').val() != '' && $('#web_lead_email').val() != '') {
            $('#continue5').removeAttr('disabled');
        } else {
            $('#continue5').attr('disabled', true);
        }
    };
    // STEP6

    // SET REVIEW INFORMATION VALUES
    setReviewInfo = function () {
        $('#theme_preview').val(f_theme.val());

        $('#church_name_preview').val(f_church_name.val());
        $('#church_location_preview').val(f_church_address.val());
        $('#Domain_preview').val(f_church_domain.val());
        if ($('#checkbox_domain').is(':checked')) {
            $('#Domain_owned_preview').prop('checked', true);
        }

        if ($('#service1-checkbox').is(':checked')) {
            $('#service1_check_preview').prop('checked', true);
        }
        $('#service1_name_preview').val(f_service1_name.val());
        $('#service1_time_preview').val(f_service1_time.val());

        if ($('#service2-checkbox').is(':checked')) {
            $('#service2_check_preview').prop('checked', true);
        }
        $('#service2_name_preview').val(f_service2_name.val());
        $('#service2_time_preview').val(f_service2_time.val());

        if ($('#service3-checkbox').is(':checked')) {
            $('#service3_check_preview').prop('checked', true);
        }
        $('#service3_name_preview').val(f_service3_name.val());
        $('#service3_time_preview').val(f_service3_time.val());

        if ($('#service4-checkbox').is(':checked')) {
            $('#service4_check_preview').prop('checked', true);
        }
        $('#service4_name_preview').val(f_service3_name.val());
        $('#service4_time_preview').val(f_service4_time.val());

        if ($('#service5-checkbox').is(':checked')) {
            $('#service5_check_preview').prop('checked', true);
        }
        $('#service5_name_preview').val(f_service5_name.val());
        $('#service5_time_preview').val(f_service5_time.val());

        $('#PastorName_preview').val(f_pastor_name.val());
        $('#ChurchAddress_preview').val(f_church_address.val());
        $('#ChurchPhone_preview').val(f_church_phone.val());
        $('#ChurchEmail_preview').val(f_church_email.val());

        $('#WebLeadName_preview').val(f_web_lead_name.val());
        $('#WebLeadPhone_preview').val(f_web_lead_phone.val());
        $('#WebLeadEmail_preview').val(f_web_lead_email.val());
        $('#BestTimeToCall_preview').val(f_best_time_call.val());
    };

    // GO TO STEP7
    $('#continue5').click(function () {
        setReviewInfo();
        $('#step6').fadeOut(1000);
        $('#step7').fadeIn(1000);
    });
    // GO TO STEP7

    // GOT TO STEP8
    $('#continue6').click(function () {
        $('#step7').fadeOut(1000);
        $('#step8').fadeIn(1000);
    });
    // GOT TO STEP8


});
// CONTROL SIGNUP PROCESS