import Homepage from "../images/case_studies/Smartfusion_Homepage.png";

import FilterIcon from "../images/icons/Filter.svg";
import PaintDropper from "../images/icons/PaintDropper.svg";
import Books from "../images/icons/Books.svg";
import Block from "../images/icons/Block.svg";
import Settings from "../images/icons/Settings.svg";

import AdminBanner from "../images/case_studies/AdminBanner.png";
import Payroll from "../images/case_studies/Payroll.png"
import FinancialManagement from "../images/case_studies/FinancialManagement.png"

import HomepageGIF from "../videos/Homepage_GIF.gif"
import FinancialPage from "../videos/FinancialPage.mp4"
import PayrollPage from "../videos/PayrollPage.mp4"

export const overview = {
    image: {
        image: Homepage,
        alt: "Smart Fusion's homepage",
    },
    video: HomepageGIF,
    header: "Overview",
    body: "Smart Fusion partnered with us to create a modern, scalable website for their government financial software brand. I built the site and tailored our CMS to their needs — adding features, refining workflows, and ensuring editors could manage content easily for the long term.",
    card: {
        header: "Tech stack",
        body: [
            "<li>Languages: HTML5, SCSS, JavaScript (ES6+), Ruby",
            "<li>Framework: Ruby on Rails</li>",
            "<li>CMS: Caboose CMS (custom modules)</li>",
            "<li>Other: Fastly CDN, AWS S3, Heroku</li>",
        ],
    },
};

export const c_and_g = [
    {
        orientation: "top",
        title: "The Challenge",
        body: "Smart Fusion needed a new website built from the ground up. Our CMS was a strong foundation, but I saw chances to make editing faster and more flexible—centralizing icons, enabling site-wide color themes, and building a true filterable blog/resources section. Previously, we simulated filtering with buttons linking to separate pages; for Smart Fusion, I implemented actual on-page filtering to support real discovery.",
    },
    {
        orientation: "bottom",
        title: "The Goals",
        body: [
            "<li>Introduced new CMS features to streamline content editing and reduce repetitive tasks.</li>",
            "<li>Centralized icon usage for consistency and developer efficiency.</li>",
            "<li>Implemented dynamic page-level color themes, allowing editors to style each page individually and have all blocks adapt automatically.</li>",
            "<li>Built a filterable blog/resources section with real on-page category and tag filtering.</li>",
            "<li>Maintained a responsive, modern front-end that aligns with Smart Fusion’s brand.</li>",
        ],
    },
];

export const solution = {
    header: "The Solution",
    body: "To meet Smart Fusion’s needs, I enhanced our CMS with new tools that improved consistency, flexibility, and ease of use for both developers and editors. These upgrades streamlined content creation, enabled dynamic visual customization, and delivered richer ways for visitors to explore content.",
    solution_cards: [
        {
            icon: {
                svg: Settings,
                alt: "Settings wheel icon",
            },
            header: "Improved Admin UI ",
            body: "The interface was reorganized and refined to support the new style-focused modules, making it easier for editors to manage icons, themes, and other visual settings confidently.",
            ele_id: "improved_admin_ui",
        },
        {
            icon: {
                svg: FilterIcon,
                alt: "3 filter bars icon",
            },
            header: "Filterable Blog/Resources Section",
            body: "Replaced the old “button and separate page” approach with a fully functional on-page filtering system. Visitors can now filter posts by category or tag instantly, without reloading the page.",
            // ele_id: "",
        },
        {
            icon: {
                svg: PaintDropper,
                alt: "Paint dropper icon",
            },
            header: "Dynamic Page-Level Color Theme System",
            body: "Editors can assign a specific color palette to any page, with all blocks automatically adapting to match. Developers can define and expand preset palettes, enabling unique page designs without additional CSS work.",
            // ele_id: "",
        },
        {
            icon: {
                svg: Books,
                alt: "Icon of 2 books leaning on each other",
            },
            header: "Centralized Icon Library",
            body: "All icons are now stored in a single CMS-managed repository, ensuring consistent styling and eliminating duplicate code.",
            // ele_id: "",
        },
        {
            icon: {
                svg: Block,
                alt: "Code symbol with square box icon",
            },
            header: "Modular Content Blocks",
            body: "Reusable, responsive components built with HTML5, SCSS, and JavaScript give editors the flexibility to create new layouts while preserving brand consistency.",
            // ele_id: "",
        },
    ],
};

export const improved_admin_ui = {
    eyebrow: "Improved Admin UI",
    header: "New Style Modules Section",
    body: "With the addition of these style-focused custom modules, the admin interface was reorganized and improved to make it more intuitive, allowing editors to easily find tools and apply visual changes.",
    image: {
        image: AdminBanner,
        alt: "Screenshot of the Caboose CMS Admin Login Page"
    },
    code: `
<pre class="code_group"><code><span class="comment"># Setup hashes for both types of modules</span>
custom_modules = { 'id' => 'custom-modules', 'text' => 'Custom Modules', 'children' => [] }
style_modules  = { 'id' => 'style-modules',  'text' => 'Style Modules',  'children' => [] }
</code></pre>

<pre class="code_group"><code><span class="comment"># Iterate through the site's modules and sort them into the correct hash</span>
Caboose::CustomModule.joins(:sites).where("sites.id = ?", site.id)
  .order("custom_modules.sort_order, custom_modules.name").limit(100).each do |cm|
  
  view_permission = cm.view_permission_id.blank? ? nil : Caboose::Permission.where(:id => cm.view_permission_id).first

  if cm.category == "Default" || cm.category.blank?
    <span class="comment"># Add to custom_modules hash if the user has the required permissions</span>
    custom_modules['children'] << {
      'icon' => cm.icon,
      'id'   => "custom_module_#{cm.id}",
      'text' => cm.name,
      'href' => cm.url,
      'modal'=> false
    } if view_permission && user.is_allowed(view_permission.resource, view_permission.action, is_superadmin)

  else
    <span class="comment"># Add to style_modules hash if the user has the required permissions</span>
    style_modules['children'] << {
      'icon' => cm.icon,
      'id'   => "custom_module_#{cm.id}",
      'text' => cm.name,
      'href' => cm.url,
      'modal'=> false
    } if view_permission && user.is_allowed(view_permission.resource, view_permission.action, is_superadmin)
  end
end
</code></pre>

<pre class="code_group"><code>
nav << custom_modules if custom_modules['children'].count > 0
nav << style_modules  if style_modules['children'].count  > 0
</code></pre>

<pre class="code_group"><code>
return nav
</code></pre>` ,

    
};

export const dynamic_color_theme = {
    eyebrow: "Color Theme Custom Module",
    header: "Dynamic Page Color Theme System",
    body: "Editors can assign a specific color palette to any page, with all blocks automatically adapting to match. Developers can define and expand preset palettes, enabling unique page designs without additional CSS work.",
    card: {
        header: "Same Blocks Different Palettes",
        body: "Both the Payroll & HR and Financial Management pages use the same modular blocks. A unique color palette is applied to each through the Dynamic Page-Level Color Theme System, automatically updating all styles so each page has its own look while keeping structure consistent.",
    },
    videos: [
        FinancialPage,
        PayrollPage
    ],
    images: [
        {
            src: FinancialManagement,
            alt: "",
        },
        {
            src: Payroll,
            alt: ""
        }
    ]
}















// export const improved_admin_ui_code = [
// `<pre class="code_group"><code>
// <span class="comment"># Setup hashes for both types of modules</span>
// custom_modules = { 
//     'id' => 'custom-modules', 
//     'text' => 'Custom Modules', 
//     'children' => []
// }
// style_modules  = { 
//     'id' => 'style-modules',  
//     'text' => 'Style Modules',  
//     'children' => [] 
// }
// </code></pre>

// <pre class="code_group"><code>
// <span class="comment"># Iterate through the site's modules and sort them into the correct hash</span>
// Caboose::CustomModule.joins(:sites)
//     .where("sites.id = ?", site.id)
//     .order("custom_modules.sort_order, custom_modules.name")
//     .limit(100).each do |cm|
  
//   view_permission = cm.view_permission_id.blank? 
//     ? nil 
//     : Caboose::Permission.where(:id => cm.view_permission_id).first

//   if cm.category == "Default" || cm.category.blank?
//     <span class="comment"># Add to custom_modules hash if the user has the required permissions</span>
//     custom_modules['children'] << {
//       'icon' => cm.icon,
//       'id'   => "custom_module_#{cm.id}",
//       'text' => cm.name,
//       'href' => cm.url,
//       'modal'=> false
//     } if view_permission && 
//         user.is_allowed(
//           view_permission.resource, 
//           view_permission.action, 
//           is_superadmin
//         )

//   else
//     <span class="comment"># Add to style_modules hash if the user has the required permissions</span>
//     style_modules['children'] << {
//       'icon' => cm.icon,
//       'id'   => "custom_module_#{cm.id}",
//       'text' => cm.name,
//       'href' => cm.url,
//       'modal'=> false
//     } if view_permission && 
//         user.is_allowed(
//           view_permission.resource, 
//           view_permission.action, 
//           is_superadmin
//         )
//   end
// end
// </code></pre>
// <pre class="code_group"><code>
// nav << custom_modules if custom_modules['children'].count > 0
// nav << style_modules  if style_modules['children'].count  > 0
// </code></pre>

// <pre class="code_group"><code>
// return nav
// </code></pre>`,
// ];