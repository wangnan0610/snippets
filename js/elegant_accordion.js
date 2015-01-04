(function(){
	$(function(){
		$('.accordion > li').hover(
			function() {
				var $this = $(this);
				$this.stop().animate({'width':'460px'}, 500);
				$('.page-header', $this).stop(true,true).fadeOut(300);
				$('.bg',$this).stop(true,true).slideDown(500);
			}, function() {
				var $this = $(this);
				$this.stop().animate({'width':'115px'}, 500);
				$('.bg',$this).stop(true,true).slideUp(700);
			}, function() {
			}
		);
	});
})();