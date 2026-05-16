const CONTACTS = [
  {
    platform: 'GitHub',
    handle: 'charlene00sara-gif',
    icon: '⌥',
    sec: 'SEC-001',
    actionIcon: 'arrow_forward',
    url: 'https://github.com/charlene00sara-gif',
  },
  {
    platform: 'WeChat',
    handle: '扫码添加微信',
    icon: '◈',
    sec: 'SEC-002',
    actionIcon: 'qr_code_2',
    url: null,
  },
  {
    platform: '小红书',
    handle: 'Charlene',
    icon: '◉',
    sec: 'SEC-003',
    actionIcon: 'open_in_new',
    url: null,
  },
]

export function ContactPage() {
  return (
    <div className="contact">
      <div className="contact__avatar">
        <span className="contact__avatar-letter">C</span>
      </div>

      <h1 className="contact__heading">Get In Touch</h1>
      <p className="contact__sub">Let's build something together</p>

      <div className="contact__list">
        {CONTACTS.map(({ platform, handle, icon, sec, actionIcon, url }) => {
          const inner = (
            <>
              <span className="contact__item-sec">{sec}</span>
              <div className="contact__item-left">
                <div className="contact__item-icon-box">{icon}</div>
                <div>
                  <div className="contact__item-platform">{platform}</div>
                  <div className="contact__item-handle">{handle}</div>
                </div>
              </div>
              <span className="material-symbols-outlined contact__item-action">
                {actionIcon}
              </span>
            </>
          )

          return url ? (
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
              className="contact__item">
              {inner}
            </a>
          ) : (
            <div key={platform} className="contact__item">{inner}</div>
          )
        })}

        <div className="contact__coords">
          <span>+ 0.0.1</span>
          <span>+ 0.0.2</span>
          <span>+ 0.0.3</span>
        </div>
      </div>
    </div>
  )
}
