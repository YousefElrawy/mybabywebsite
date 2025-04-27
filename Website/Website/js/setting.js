const settingIcon = document.querySelector('img[alt="settings img"]');
// card options
const accountSettingsOpt = document.getElementById('account-settings-opt'); // account settings option card
const registerChildDataOpt = document.getElementById('register-child-data-opt'); // register child data option card
const complaintOpt = document.getElementById('complaint-opt'); // complaint option card
// const logoutOpt = document.getElementById('logout-opt');

// Modals
const accountSettingModal = document.querySelector('article.account-setting-modal');
const registerChildDataModal = document.querySelector('article.register-child-data-modal');
const complaintModal = document.querySelector('article.complaint-modal');
const overlayModals = document.querySelector('div.overlay'); // overlay
const closeBtns = document.querySelectorAll('button.close-btn'); // close button
const cancelBtn = document.getElementById('cancel-btn');


function toggleSettings(toggle) {
    if (toggle) {
        settingIcon.setAttribute('src', './Images/Icons/settings-selected.svg');
        settingIcon.setAttribute('alt', 'settings selected img');
    } else {
        settingIcon.setAttribute('src', './Images/Icons/weui_setting-filled.svg');
        settingIcon.setAttribute('alt', 'settings img');
    }
}
settingIcon.addEventListener('click', toggleSettings(true));

// Modal Toggle Function
/**
 * 
 * @param {HTMLElement} modal - The modal element to toggle
 * @param {boolean} show - Whether to show or hide the modal
 * @param {string} style - The display style to apply ('block' or 'flex')
 */
// function modalToggle(modal, show=false, style='block'){
function modalToggle(modal, show=false){
    // modal.style.display = show ? style : 'none';
    modal.style.transform = show ? 'translate(-50%, -50%)' : 'translate(-50%, 100%)';
    overlayModals.style.display = show ? 'block' : 'none';
    document.body.style.overflow = show ? 'hidden' : 'auto';
}
// Account Modal
// accountSettingsOpt.addEventListener('click', () => modalToggle(accountSettingModal, true, 'flex'));
accountSettingsOpt.addEventListener('click', () => modalToggle(accountSettingModal, true));
// closeBtns.addEventListener('click', () => modalToggle(accountSettingModal, false));
overlayModals.addEventListener('click', () => modalToggle(accountSettingModal, false));
cancelBtn.addEventListener('click', () => modalToggle(accountSettingModal, false));

// Register Child Data Modal
registerChildDataOpt.addEventListener('click', () => modalToggle(registerChildDataModal, true));
overlayModals.addEventListener('click', () => modalToggle(registerChildDataModal, false));
// closeBtns.addEventListener('click', () => modalToggle(registerChildDataModal, false));

// Complaint Modal
complaintOpt.addEventListener('click', () => modalToggle(complaintModal, true));
overlayModals.addEventListener('click', () => modalToggle(complaintModal, false));
// closeBtns.addEventListener('click', () => modalToggle(complaintModal, false));


closeBtns.forEach(btn => {
    btn.addEventListener('click', () => modalToggle(btn.closest('article'), false));
})