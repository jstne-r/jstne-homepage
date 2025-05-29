const MediaIcon = props => {
    return (
        <img 
            src="/images/paw.png"
            alt="Media Icon"
            width={20}
            height={20}
            className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
            {...props}
        />
    );
}

export default MediaIcon;