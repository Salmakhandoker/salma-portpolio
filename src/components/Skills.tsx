import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW5MUMRhlIrRMpy7e3jm4eh4YQ3Ev0-A9fKts6evCDL-_GhE3eAz028Oyi0WDbIA0zxtro7Vfc5yuHiI9EoiXlxLWF7FUEEzixqXMm1dVz_ldc-LqGY1W3RGmivRpig9OOPl-MUF8lU5gKPEyysU8X2zkDfH2ppEA3w63vhDz_ZQ7JdapyDp0pfUqhNhd3RyvS388-sTHBt-HolsteC1ITF45hysU4Gf86BVVIvgLiqXAtIlvC_un3VHkN2S89SiOsXb7rWc8eY70' },
    { name: 'Next', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv-Znp3TxFISWRsoUEbPordwCSagYYuys2KbNDXYPcBBC33bBzP5hqeoSs_cOBYqD5eQOIXVDl6S4Ni-GDT7B4cEt4w8vWZEESM1diO8GbJJsAD3CP26yZyFgnwjVCf7Nsj7CwUMOeS7k_mPUrYveQhJgAaeXk2wRyhx6Tx66ZOG4NDWE59WXx4Z2pRz5PLUekEqaQ_twnNhC2A4G3qJyqCDcq8fuklWpiddzgpMg8TE3LBJxo_yqIES_cKhDkZjbfdLGmKkx8KN8' },
    { name: 'Node', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNzDGkVyPIlRFoPkgLNC7NpfivSvMRwfmeMIDmSgDU0knmQAI1qxeXa49zt0OSnys5jsem-c-Xhb1n6iGFBuePmewUKYYGgATPTAvp_eLUZXFpfsaDWuv0TT5W7O5BMKZpl-YunYGZwFwAkpPhu1UEYtXSv22mtA3W3HOCWnAtkkxsWc99KBVvQSSVi3-LU0q3Ojhs_xJ5hJzOojkb_Pu1uBWpoRk-QVAswblTpyAR45femeeVG5HGlveKhHYsc5DSs_5ePP52hsA' },
    { name: 'Express', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr1jFWH7Aeq3142m60srmLptPj83TSGcIjBuQx3R_gtpIUqhwmwVLpqpyf09oKxOpRJuKXOcOj5MmAcM0U6u-UTDil6BFtYY3NPoS3H6inG0mAasWo2g970MlVxobAm3a-XEIykNUVtSS1gCpe0Tw6FPly_9Rknu8YVUEa83YMTwDYJYyFVM5AAbXt6cjdzYBapZFZS9LkE8m9YQVR0q-Ewp3vAp8GuvaJsvo8B9IeJfdegbJE0cXJKuuQ3efnM5A5oLkieihbFhs' },
    { name: 'Mongo', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQ4Wj4otGPxdPvsoylp8pcn26pWrirllPOKpbyIEzt7RcfLJhhRoDEjjn8lVvIunz9qXvcvvHVNpCZ4VRDcptaGgcCvmqS7FZIZk-rYJuhS1HYgmXXmYG6EjSlGKFbCFdBzN5mgJkqwHypTKKvk0L6zRndtxUl7i8yMj6KOTL0MbqVu-Yk1t_DJMRjEEpeFah0Lcgr-V60upc5Tx8tc05jgFjQQyCzuAXeFHCBQqvNoPRW4JuToQ3WpEYjFSUvGFk7yQvYAMLZGo' },
    { name: 'Wordpress', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaT2a698ongCaT7k0vegYU787pPfuv8YNOXHC8TCeGd9OhlePcc2CBe73lEtYmjo34VWE9RGYgMlvXDvtK4a5jbkzXKrVeyxyAUN6KPUrwsErfxWMq_0cdvgWpHzZL_1crzARzD7cF7dVwQk27Db5ypEbR1ANwvR0Xv3MK9MgTJJe12HtUKGVOqeV8dfOWVOZM47oLXzIyPHGxn4MhiPdzbE2JWSJQ2Ts6NGn-oQHy0rLzFrfjU-e75gk9WCagDlO0uZ-hA3CZuHI' },
    { name: 'Firebase', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTD6cuqIcWHIhQGK3abv3wh2oegNaHjFOTiKjNUMG70CbygjmZFY2buPmg2pFMHmbpDj7kyLj85b6eAAp4JdNyi7jLwTVGuTbOm_49Kx_0UfUA2IE1UXd5qN2ghinHrW0Q7j-H2drfmTs_RAU_98QXkzDxUVgUujUibQWEwDHrshrWIcto2RFogQ9r5z6N5dflS-rlt71s9TLquLUOMXBBws80NNVamoiJNTYX1xMC-3QCbZSpHuZ_o9BhxHaZ2v_BrB_8LFP8mn0' },
    { name: 'HTML', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6BVkM1HG9yiGSJEuY9QpyzrE3UiVt6RsaFnC2BaYdzS5ct2P21i4m-xrYwLJ-4mrUGiVn8KclQPCbsOLmONC79Up7Dw4vHwh2ZoSiKAbbn0bBSUJ68Vd4IoSe-vYC5f0zdvsADovxtZF0f_iGx9fWVGoILe5KTd2Ur2IDn7PlkhUHVhG9LgaAAOdYthZVZTKBLrvK3TSCWbg0AoqR0wARSwSoeGkR68mCq15Ln1nhhQmh_FighRrK7dht4Cz-HcMi89QfYQ4FmOY' },
    { name: 'CSS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd8f-vCOhkPhxqP-X7N_J9K8LbUg2BXoZj7fhRu357G2DvfGqjDAQ6oS1T02C3B3vOZCNnRrJzb53xrZ13RIbsCPKGUuj1isDQDjXVsGx5dlREQD7LGCeScqPpGw6GQyUThJoTPXyOXuxlBATqw6HLOdeINscAVBbj-JLGTPH1EVWnjsAJUywTLSKt0TE2LooQgpOOiJqeKndR2iptAsTYbNNgyre4kclZCr1kBWPQmxgC3aiDZIgQxLjhcbtBjZ3Y9w0eMJu7KI0' },
    { name: 'SCSS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC1HTzORJLyKkmANhNKFjrlccWTpRmplsNhu4Mx7SHs7uzZHpPo8voYhrdcOg6noD3yPgp1WDv3LN2kRanE-yk2FSr88si9kHGP2yT2NvtHs9XfUm1xd5XLMxdqq_9C0eWTiciWBgWDELZ3AUIOrjADxWblsNfE81XIJ-yIzYuDLRx6lyFMPiMI7FoJapXDTbj9ILIAR_ytAzgcJtQn5vijofjm6BtNAsu4rj5X-4csBoPpxWmC1JAw5Ht7Hh6xpWjW3-OVtOHSSo' },
    { name: 'JS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwrFR8dNipXONd6NWwG9QbYnYRyVEDC8WhBVXAXbs0VZ1OAleAJ-66LUXVXDhj088uaiSIX85h0YqgbKSXKioGB9liNYm_MlQe5FODMULCuXFrgofVSdjzXkGpiIfh9Lr0zym8AO1Y4sNx1lfkv7kwvxTsz2NKYB5mDKeFrodOVr3BfBz6Xk_tzrvN-UJlK19_zDbNmuTUiq82Kn3Gv2Dy5D0GEOhRFrVjwrIi7hKS5cSV9kwPsTgSVhnOBXUxA3_HRBbR0Vyf5qA' },
    { name: 'TS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiaByaDVt-27SlUvsLgzLejgciyP3unlkO-BvqUB3f-SZTnL5yLhOBnAbqwp86iJqqnSl7D_aCLeiYHiYKgSvpDoTeYnX7dVBS_aRf22Y5LuHkrJV5d8e414ip3Q7My3gqqnbgjaTknggDTPchXM4JdO0Z4sk4EBYLgooiZVIRH4Bb8cYxMMi-OI0tzJRcCMzSB4_EgZSWab0oA9LfDlEzqGbAJ12FznbnGMm6BXh7H-iPrHKHBs8xAC3bOwXBq_E61MZtOo74y7U' },
    { name: 'Tailwind', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJwC3Pi1JZiHmbKhEHHBstLUtdfeVXdD_HfLn4UBaTj6RsSDP2UUAcGlUXn3bSetkhJk80eQ5VWHkgx2P26ZUlZ57r1IxtMARw7NmU_CT3Z63ZJO_KTCfDTSeH6g5U1uwE-jmN_rMElB1IpZRlkicC-cz70N5VS8pN4GMDb3wYYyjTauFDoo92Rv55hi6bWVxJla6dLST_ZA8p-4L5XON5SJVMTjMCQ-yRwwnt33AYkIE-ZLE2REYhPrcjX3JPziBc03dWPzrVb40' },
    { name: 'Bootstrap', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH31fww3U7xzpBAXYiOSknLsXpshVOm1aVotozmajQ5ovd94nBps3fkMGPLvxNIFmxN2nXzAN4HQJ5yGzS7VL2miT_NoQKYMSO4b0iGoykQbEqSXKkmoO_xYY9TIUMxr8tV8hBC8FcvxvxYqFr38G5ijXucLBuP0_fvb039w8Hae9RHEivd6U2ZP9M6RE7bj34zdTB6TUOND5ulG8Wx9d8DhpjLFYnOtgxhzgtJ1JRhbDkbRyJD5n-pta05epmCGi4F4Oxmzt6vJA' },
    { name: 'MUI', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Kjc8i57tUbB9dg-sDWYnQ2nKdCWuS5BmNcHVfa6r4irranxAV5cMz2W6TTvdup93MgAOtCW6Q4doOsugFqYpM2xQxuB2Y4Iljae436v78igkYRz0WMy5IHx_d7Swl_8X0bwYANdYXPO-PVfR5WoGJknmfJgDMfkjGVtmD8zSUAauPPhVYsPzwsrEQAhdEdrApNo413ws30Bg_z6N0wZ5d0PtSdj03MEhBJankDaWmXhkWRvagly_0Q4g1K4LiBpKzimpHRabNVM' },
    { name: 'Shadcn', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcOYDfFNBPGCJwLHDkUFIk2SSl_7C4qMJLWL-e69NumetDlRbrkYzT_G3O4MJPxVdXIk5iFAZhKWLCdbNarqGeAdDh4u8FcBgmQjbCaXv5Nu7XZgHMxXhISQPSoi5znIhXI4UJUfYnnH0J4FOygljR5gcakNBQlGZJTXsLBMVE2xq-JW5m0VrRfTpbKlSYcKddQ-746cKvif_o6GgfDl1CKWfWBFC8AWwYYsM8yZhZoKLWXKYhqr7jH8pOYwtV9WdOC7VZavWPgJ8' },
    { name: 'Prime', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ90JAOL5FPZ2OJ5-VN3sBvyBW6fSk-EdraaHv0GoY-l5Q43TWRs6OhDPce3V-Isx27PmBWU1a6BeDyOwxxobk82fMVWAN-9sZhaXxhpNCSKFJNobnHQYxIEMwpAPYbgAQIA89Yj3CvnbzLx3QN0Vq5jBhtGJhVqd2KBuKrnAJnhIlBlxsypo947574AQggEW4nidpw5AHFqnGPigxCtJzF0VuZ3TPZtqbn-e3-GRYsbH-e1hzVQEaTUMA3TAZ20pZPqzcHS_sy_c' },
    { name: 'Figma', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClX5Xk4Bae5BcsOfZiwm73lM4zxHJWEhJ-8QE2fJaVDYh1ce7r7yy816uxs1zWRFMLd92j36gErIRUACXg0ntSDgrtTsTkrgVZvXNo4yM32tIP1E12AxRqCBEDnQaE3tx3h9JntQs0ZEfgyp8UZzg2pOb4ZxsyKbpRATw1Uu4dtzqZ1OoG9oWgng_dVBNP09U5FPcL-_oRBjmhWiRrtOf1oGzF77e4bfm_ClWldXwa9gKRiwmNgkHQ66s6RBdyiICcRPfPZoiyfwg' },
  ];

  return (
    <div className="bg-card-bg border border-white/5 rounded-3xl p-8 space-y-8">
      <div className="relative">
        <div className="space-y-4">
          <p className="text-[10px] text-brand font-bold uppercase tracking-widest">My Skills</p>
          <h3 className="text-3xl font-bold leading-tight">My Toolbox of <span className="text-brand">Skills & Experience</span></h3>
          <p className="text-xs text-gray-500 max-w-xs">I focus on full-stack web application development combining backend architecture, frontend development, UI/UX design, and SEO to build scalable, high-performing, and user-friendly solutions.</p>
        </div>
        <div className="absolute -top-4 -right-4 w-24 h-24">
          <img
            alt="Experience target"
            className="object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQhI-9NGngiicwKvrFBhBd00GYX3JQR9PCBwjBqa_mKtgDOUJ8QfDmQFLeK_xnWiiRyvoQf5FNnGk5XAbEM_RgKgkMDoVmXFpuuJJpRnfmWLN88hFbUuSmsOsIbWM20rU4jGThSLVTdl56n5NAvtCWMa0b_5Lxu5pGk_WUqTEYHJOSG4V9YVaJ_tdgiGVLAtiYQkKliiI39Q_k4u6ESc_HmrK3FvE_2Y8_FkVBvP7dNnOyF2WvhAdbMQgoXvL3ipKx8Cu6ckjOfTU"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card aspect-square rounded-lg border border-white/5 flex items-center justify-center p-2">
            <img alt={skill.name} className="w-full" src={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
