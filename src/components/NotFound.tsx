function NotFound() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '3rem', color: '#ff6347' }}>Oj, något gick snett!</h1>
        <h2 className="text-8xl text-red-700 animate-bounce">404 NOT FOUND</h2>
        <div className="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/84PvlM4ZTCLni" width="100%" height="100%" className="position:absolute" frameBorder="0" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/rugby-ireland-84PvlM4ZTCLni"></a></p>
        <p style={{ fontSize: '1.2rem', color: '#333' }}>
          Men ingen fara! Här är några länkar som kan hjälpa:
        </p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="/" style={{ fontSize: '1.2rem', color: '#007bff' }}>Till startsidan</a></li>
        </ul>
      </div>
    );
  }
  
  export default NotFound;
  