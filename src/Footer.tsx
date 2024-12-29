function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row justify-around text-center align-middle leading-10 text-platinum dark:text-timberwolf-400">
            <span>Copyright © {new Date().getFullYear()} Jiří Petrnoušek</span>
            <span>Background by <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">SVGBackgrounds.com</a></span>
        </footer>
    )
}

export default Footer
