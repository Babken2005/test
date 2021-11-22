function WelcomeStep() {
  return (
    <div className="step WelcomeStep">
      <div className="stepTop d-f a-c j-c">
      <img className="wave" width="32" src="logo.png" alt="hand" />
      <h4>Welcome to Clubhouse!</h4>
      </div>
      <div className="stepCenter">
        <h4>
          We're working hard to get Clubhouse ready for
          everyone! While we wrap up the finishing youches.
          we're adding people gradually to make sure nothing
          breaks :)
        </h4>
      </div>
      <div className="stepBottom a-c j-c d-f">
        <div className="getUserNameButton c-p d-f a-c j-c">
          <h4>Get your username</h4>
          <i className='bx bx-right-arrow-alt'></i>
        </div>
        <h4 className="inviteText">Have an invite text? Sign in</h4>
      </div>
    </div>
  )
}

export default WelcomeStep;