$(document).ready(function () {
    $(function(){
        $("#profile-card-header").typed({
            strings: ["An AI Entrepreneur, Founder, Innovator",
                      "CEO, Managing Director (Chairman)",
                      "DeepBrainz Technologies Private Limited", 
                      "A DPIIT Recognized AI Startup", 
                      "A Google Cloud Technology Partner",
                      "A NVIDIA Inception Partner (Member)",
                      "An AWS Partner Network (APN) Technology Partner",
                      "CDO/CAIO (AI Chief), AI Researcher",
                      "Data Scientist - Machine Learning (Algorithms)",
                      "Machine Learning SW Engineer", 
                      "Agile AnalyticsOps SW Engineer",
                      "AI Product Manager",
                      "Machine Learning Practitioner",
                      "Machine Learning Consultant",
                      "49th Kaggle Master (Kernels)",
                      "Kaggle 2x Expert (ML/Data Competitions)",
                      "Deep Reinforcement Learning Enthusiast",
                      "An AI/ML Open Source OSS Developer"
            ],
            typeSpeed: 0.4,
            loop: true
        });
    });


    //Default options
    var options = {
        animationDuration: 0.5, //in seconds
        filter: 'all', //Initial filter
        callbacks: {
            onFilteringStart: function() { },
            onFilteringEnd: function() { },
            onShufflingStart: function() { },
            onShufflingEnd: function() { },
            onSortingStart: function() { },
            onSortingEnd: function() { }
        },
        delay: 0, //Transition delay in ms
        delayMode: 'progressive', //'progressive' or 'alternate'
        easing: 'ease-out',
        filterOutCss: { //Filtering out animation
            opacity: 0,
            transform: 'scale(0.5)'
        },
        filterInCss: { //Filtering in animation
            opacity: 1,
            transform: 'scale(1)'
        },
        layout: 'sameSize', //See layouts
        selector: '.filtr-container',
        setupControls: true
    };

    $(function(){
        $('#tab-3').click(function(){
            if ($(this).is(':checked'))
            {
                var filterizd = $('.filtr-container').filterizr(options);
            }
        });
    });

    $(function(){
        $('.isotopeFilters2').on( 'click', 'a', function(e) {
            $('.isotopeFilters2').find('.active').removeClass('active');
            $(this).parent().addClass('active');

        });
    });

});




