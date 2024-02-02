import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section class="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>

        <div class="icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
        </div>
        <p>Made with <i class="fas fa-heart"></i> by <Link href="/">Uzair Developer</Link></p>
        <p>Copyright © 2021 <Link href="/">Xplore Skill</Link>. All Rights Reserved</p>
    </section>
  )
}
