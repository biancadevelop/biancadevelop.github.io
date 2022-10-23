import './Drumkeys.css';


const Drumkeys = () => {

    const DrumData = [
        {
            'letter': 'A',
            'key': 65,
            'sound': 'Clap',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/clap.wav'
        },
        {
            'letter': 'S',
            'key': 83,
            'sound': 'Hi Hat',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/hihat.wav'
        },
        {
            'letter': 'D',
            'key': 68,
            'sound': 'Kick',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/kick.wav'
        },
        {
            'letter': 'F',
            'key': 70,
            'sound': 'Open Hat',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/openhat.wav'
        },
        {
            'letter': 'G',
            'key': 71,
            'sound': 'Boom',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/boom.wav'
        },
        {
            'letter': 'H',
            'key': 72,
            'sound': 'Ride',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/ride.wav'
        },
        {
            'letter': 'J',
            'key': 74,
            'sound': 'Snare',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/snare.wav'
        },
        {
            'letter': 'K',
            'key': 75,
            'sound': 'Tom',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/tom.wav'
        },
        {
            'letter': 'L',
            'key': 76,
            'sound': 'Tink',
            'src': 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67723/tink.wav'
        }
    ]

    const playSound = (e) => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    const removeTransition = (e) => {
        if (e.propertyName !== 'box-shadow') return;
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitioned', removeTransition));

    window.addEventListener('keydown', playSound);

    return (
        <div>
            <h1>Sound Pad</h1>
            <p>Press any of the bottom keys & make some noise!</p>
            <div className='keys'>
                { DrumData.map((obj, i) => (
                    <div key={i}>
                        <div className='key' data-key={obj.key} >
                            <kbd>{obj.letter}</kbd>
                            <span className='sound'>
                                {obj.sound}
                            </span>
                        </div>
                        <audio src={obj.src} data-key={obj.key}></audio>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default Drumkeys