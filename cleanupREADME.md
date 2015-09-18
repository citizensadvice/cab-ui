# The big LESS clean up

The attempt is to reduce the overall files, while keeping the styles working for existing page elements. Much of this document should eventually be combined into README.


## Folder structure

Gradually, the LESS files will need to fit into a new folder structure.

	. site-2.less 			imports all LESS files  
	+-- base 				used for all base level LESS files, such as  
	| +-- colors.less  
	| +-- variables.less  
	+-- vendors				all third party CSS and LESS, such as resets  
	+-- mixins				general functional mixins will sit here, giving us a library of funtional mixins to draw on  
	+-- modules				all website page elements, such as breadcrumbs  

Currently, the LESS files are terribly organised.

	. site-2.less 			imports all LESS files directly  
	+-- existing			this contains all the LESS imports from the existing websites LESS structure  
	| +-- inc 				this contains all the original LESS files  
	| +-- beta				this contains all the beta styles used for beta templates over the top of inc files  
	+-- modules				currently a bit of a mess, but will become 'base' folder  
	| +-- colors.less 	
	| +-- variables.less  
	+-- partials			confusingly, this will become the 'modules folder'  
	+-- styleguide			these are LESS files specifically for the styleguide, but not the website (may need to remain)  
	+-- vendor				actually pretty tidy, no need to change this


## Git structure

When creating products for testing we will now use a new branch, with modular naming convention.

Branches should now be named with purpose/epic/product. For example:

	test/consumer/side-navigation

The 'test' naming module should be kept specifically for repo's that will be pushed to gh-pages for user testing.


## Working process

Currently there is a second file site-2.less that directly compiles everything into it, rather that site.less. This allows us to run a 'cleanup' stylesheet and test stylesheet alongside one another. Make all clean up changes to site-2.less.

site-2.less currently imports every file directly, rather than using imports of import files. This helps keep track of all the files.

Use site-2.less as a checklist. The aim is to eventually go through each file listed in there in order and gradually modify them. Refer to the checklist below for guidance on what to change and how.


### Clean up checklist

1. Is this file needed? Can it be removed?
+ Is the code duplicated already elsewhere is any form?
+ Can these two duplicate files be merged? (there's a good chance one is overwriting the other)
+ Are there any !important classes? If so, fix them.
+ Are there any variables used? Make sure they use a variable defined in either base > variables.less or base > colors.less
+ Are there any outdated mixins, or missing mixins?
+ Is there anything that would warrent its own mixin?
+ Could the LESS use BEM structure better (without adjusting the HTML)?
+ Is the file in the correct folder?
+ Is the file correctly listed in site-2.less?
